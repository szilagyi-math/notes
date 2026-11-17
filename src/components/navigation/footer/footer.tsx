interface FooterProps {}

const Footer = () => (
  <footer className='site-footer'>
    <div className='site-footer-inner'>
      <div>
        <a href='https://www.bme.hu/'>
          Budapesti Műszaki és Gazdaságtudományi Egyetem
        </a>
        <p>Matematika · Szilágyi Brigitta</p>
        <a href='https://github.com/szilagyi-math/notes'>
          Forráskód a GitHubon
        </a>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/static/eu-szechenyi-mo.svg'
        alt='Európai Unió és a Magyar Állam támogatásával'
      />
    </div>
  </footer>
);

export { Footer };
export type { FooterProps };
