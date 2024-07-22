interface MainNavigationProps {}

const MainNavigation = ({}: MainNavigationProps) => {
  return (
    <nav className='main-nav'>
      <div className='main-nav-content'>Navigation</div>
    </nav>
  );
};

export { MainNavigation };

export type { MainNavigationProps };
