// Document types
export type Subject = 'G1'; // | 'G2' | 'G3';
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
    solutionsDir: string;
    files: {
      // Only needed if downloadable
      source?: string;
      target?: string;
      displayName?: string;
      solution?: string;
      // Required for all
      description: string;
      week: number;
    }[];
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
    edubase: string;
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
