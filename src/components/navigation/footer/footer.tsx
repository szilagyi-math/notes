interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className='w-full border-t-2 bg-secondary-bg'>
      <div className='mx-auto max-w-content-width grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
        <div className='col-span-3 flex'>
          <p>
            Készítette: <a href='https://github.com/tibi1220'>@tibi1220</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

export type { FooterProps };
