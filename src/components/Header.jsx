import Logo from './Logo';
import Navigation from './Navigation';
import UserAuth from './UserAuth';

export default function Header() {
  return <header id="MAIN_HEADER">
    <div className="site-container">
      <div className="header-container">
        <Logo />
        <Navigation />
        <UserAuth />
      </div>
    </div>
  </header>
}