import { downloads } from 'content/downloads';

import type { NextPage } from 'next';

interface DownloadsPageProps {}

const DownloadsPage: NextPage<DownloadsPageProps> = () => {
  return (
    <div>
      <h1>Downloads</h1>
      {downloads.map(file => (
        <div key={file.filename}>
          <a href={`/downloads/${file.filename}`}>{file.filename}</a>
        </div>
      ))}
    </div>
  );
};

export default DownloadsPage;
