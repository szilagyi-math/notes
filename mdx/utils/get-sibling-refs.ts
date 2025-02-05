import fs from 'fs/promises';

import type { NoteRef, Subject } from 'common/types';

interface GetSiblingRefsConfig {
  baseDir: string;
  subDir: string;
  fileName: string;
  subjectCode: Subject;
}

const formatNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

const formatRef = (subjectCode: Subject, chapter: number, section: number) => {
  return `${subjectCode}-${formatNumber(chapter)}-${formatNumber(
    section,
  )}` as NoteRef;
};

const getSiblingRefs = async ({
  baseDir,
  subDir,
  fileName,
  subjectCode,
}: GetSiblingRefsConfig) => {
  const chapterRoot = `${baseDir}/${subDir}`;

  const baseRes = (await fs.readdir(baseDir)).filter(f => f.match(/^\d{2}-/));
  const chapterRes = (await fs.readdir(chapterRoot)).filter(f =>
    f.match(/^\d{2}-/),
  );

  // Chapter indexing starts from 1 !!!
  const chapterCount = baseRes.length;
  // Section indexing starts from 0 !!!
  const sectionCount = chapterRes.length;

  const currentChapter = parseInt(subDir.split('-')[0]);
  const currentSection = parseInt(fileName.split('-')[0]);

  let prevRef: NoteRef | null = null;
  let nextRef: NoteRef | null = null;

  // Calculate next
  if (currentSection + 1 === sectionCount) {
    if (currentChapter !== chapterCount) {
      nextRef = formatRef(subjectCode, currentChapter + 1, 0);
    }
  } else {
    nextRef = formatRef(subjectCode, currentChapter, currentSection + 1);
  }

  // Calculate prev
  if (currentSection !== 0) {
    prevRef = formatRef(subjectCode, currentChapter, currentSection - 1);
  } else {
    if (currentChapter !== 1) {
      const prevChapterRoot = `${baseDir}/${baseRes[currentChapter - 2]}`;

      const prevChapterRes = (await fs.readdir(prevChapterRoot)).filter(f =>
        f.match(/^\d{2}-/),
      );

      const prevSectionCount = prevChapterRes.length;

      prevRef = formatRef(
        subjectCode,
        currentChapter - 1,
        prevSectionCount - 1,
      );
    }
  }

  return {
    prevRef,
    nextRef,
  };
};

export { getSiblingRefs };

export type { GetSiblingRefsConfig };
