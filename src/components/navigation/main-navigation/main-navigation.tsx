interface MainNavigationProps {}

const MainNavigation = ({}: MainNavigationProps) => {
  return (
    <header className='main-nav-wrapper'>
      <nav className='main-nav'>
        <div className='main-nav-content'>Navigation</div>
      </nav>
    </header>
  );
};

export { MainNavigation };

export type { MainNavigationProps };
