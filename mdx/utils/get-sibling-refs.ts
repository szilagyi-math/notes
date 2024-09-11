import fs from 'fs/promises';

import type { NoteRef, Subject } from 'common/types';

interface GetSiblingRefsConfig {
  // Path to the content folder
  basePath: string;
  // Path to the current book
  baseDir: string;
  // Slug of the current note
  slug: [string, string];
  // Code of the subject
  subjectCode: Subject;
}

const formatNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

const formatRef = (subjectCode: Subject, chapter: number, section: number) => {
  return `${subjectCode}-${formatNumber(chapter)}-${formatNumber(
    section
  )}` as NoteRef;
};

const getSiblingRefs = async ({
  basePath,
  baseDir,
  slug,
  subjectCode,
}: GetSiblingRefsConfig) => {
  const [chap, sec] = slug;

  const root = `${basePath}/${baseDir}`;
  const chapterRoot = `${root}/${chap}`;

  const rootRes = (await fs.readdir(root)).filter(f => f.match(/^\d{2}-/));
  const chapterRes = (await fs.readdir(chapterRoot)).filter(f =>
    f.match(/^\d{2}-/)
  );

  const chapterCount = rootRes.length;
  const sectionCount = chapterRes.length;

  // !!! 0 based index
  const currentChapter = parseInt(chap.split('-')[0]);
  const currentSection = parseInt(sec.split('-')[0]);

  let prevRef: NoteRef | null = null;
  let nextRef: NoteRef | null = null;

  // Calculate next
  if (currentSection + 1 === sectionCount) {
    if (currentChapter + 1 !== chapterCount) {
      nextRef = formatRef(subjectCode, currentChapter + 1, 0);
    }
  } else {
    nextRef = formatRef(subjectCode, currentChapter, currentSection + 1);
  }

  // Calculate prev
  if (currentSection !== 0) {
    prevRef = formatRef(subjectCode, currentChapter, currentSection - 1);
  } else {
    if (currentChapter !== 0) {
      const prevChapterRoot = `${root}/${rootRes[currentChapter - 1]}`;

      const prevChapterRes = (await fs.readdir(prevChapterRoot)).filter(f =>
        f.match(/^\d{2}-/)
      );

      const prevSectionCount = prevChapterRes.length;

      prevRef = formatRef(
        subjectCode,
        currentChapter - 1,
        prevSectionCount - 1
      );
    }
  }

  return {
    prevRef,
    nextRef,
  };
};

export { getSiblingRefs };
