import { GameOfLife } from '@/components';

import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className='not-found-wrapper'>
      <GameOfLife />
      <div className='not-found-content'>
        <div className='not-found-main-content'>
          <h1 className='not-found-code'>404</h1>
          <p className='not-found-text'>A keresett oldal nem található</p>
        </div>
        <p className='not-found-description'>
          Vissza a <a href='/'>főoldalra</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
