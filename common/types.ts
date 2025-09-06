// Helper types
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<A, B> = (Without<A, B> & B) | (Without<B, A> & A);

// Document types
export type Subject = 'G1' | 'G2' | 'G3';
export type DocumentType = 'book' | 'practice';

// For velite
export type NoteSlug = [string] | [string, string];
export type NoteRef = string;

// For subjects
export type SubjectData = {
  // General info
  name: string;
  code: string;
  lecturer: string;

  // Directory
  dir: string;
  absoluteDir: string;
  absoluteTargetDir: string;
  rcFile: string;
  buildDir: string;

  // Breakdown from neptun
  breakdown: {
    credits: number;
    lectures: number;
    practicals: number;
    labs: number;
    isExam: boolean;
  };

  // Notes
  book: {
    dir: string;
    source: string;
    target: string;
    displayName: string;
  };

  // Online notes
  onlineNotes: null | string;

  // Practice material
  practiceMaterial: {
    dir: string;
    pdfSolutionsDir?: string;
    latexSolutionsDir?: string;
    hideSolutions?: false | 'no-copy' | 'no-link';
    files: ({
      // Schedule
      description: string;
      week: number;
      // Compilation
      source?: string;
      target?: string;
      // Solutions
      hideSolution?: false | 'no-copy' | 'no-link';
      // Other
      displayName?: string;
      videoLink?: string;
    } & XOR<
      {
        pdfSolutionSource: string;
        pdfSolutionTarget?: string;
      },
      {
        latexSolutionSource: string;
        latexSolutionTarget: string;
      }
    >)[];
  };

  // Lecture schedule
  hideLectures?: boolean;
  lectures: {
    room: string;
    day: number;
    start: [number, number];
    end: [number, number];
  }[];

  // Practical schedule
  hidePracticals?: boolean;
  hideEdubase?: boolean;
  practicals: {
    group: string;
    room: string;
    day: number;
    start: [number, number];
    end: [number, number];
    edubase?: string;
    staff: {
      name: string;
    }[];
  }[];

  // Other
  downloads: Downloads[Subject];
};

// For batch downloads
export type Downloads = {
  [key in Subject]: {
    book: {
      fileName: string;
      displayName: string;
    };
    practice: Array<{
      fileName: string;
      displayName: string;
    }>;
  };
};
