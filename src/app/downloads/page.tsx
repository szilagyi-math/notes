import type { NextPage } from 'next';
import type { Downloads } from 'scripts/types';

import d from 'generate/downloads.json';

const downloads: Downloads = d;

const subjects = Object.keys(downloads) as Array<keyof Downloads>;

interface DownloadsPageProps {}

const DownloadsPage: NextPage<DownloadsPageProps> = () => {
  return (
    <div>
      <h1>Downloads</h1>
      {subjects.map(subject => {
        if (!downloads[subject]) return null;

        return (
          <div key={subject}>
            <h2>{subject}</h2>
            <h3>Előadásjegyzet</h3>
            <ul>
              {downloads[subject].book?.map(file => {
                return (
                  <li key={file.fileName}>
                    <a href={`./downloads/${file.fileName}`}>
                      {file.displayName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <h3>Gyakorlati jegyzet</h3>
            <ul>
              {downloads[subject].practise?.map(file => {
                return (
                  <li key={file.fileName}>
                    <a href={`./downloads/${file.fileName}`}>
                      {file.displayName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DownloadsPage;
