import styles from './main.module.css';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main
      id='main'
      className={styles.main}
    >
      {children}
    </main>
  );
};

export { Main };

export type { MainProps };
