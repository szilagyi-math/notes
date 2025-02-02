interface MergeMetaTagsConfig {
  currentTags?: string[];
  subjectCode: string;
}

const mergeMetaTags = async ({
  currentTags,
  subjectCode,
}: MergeMetaTagsConfig): Promise<string[]> => {
  return [
    `Matematika ${subjectCode}`,
    `BMETE94BG0${subjectCode[1]}`,
    ...(currentTags || []),
  ];
};

export { mergeMetaTags };

export type { MergeMetaTagsConfig };
