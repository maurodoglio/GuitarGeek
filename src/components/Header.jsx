import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header({ overallProgress }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🎸</span>
          <span className="header__logo-text">FretMaster</span>
        </Link>
        <nav className="header__nav">
          <Link to="/" className={`header__link ${isActive('/') ? 'active' : ''}`}>
            Lessons
          </Link>
          <Link to="/practice" className={`header__link ${isActive('/practice') ? 'active' : ''}`}>
            Practice
          </Link>
          <Link to="/progress" className={`header__link ${isActive('/progress') ? 'active' : ''}`}>
            Progress
          </Link>
        </nav>
        <div className="header__progress">
          <span className="header__progress-label">{overallProgress}%</span>
          <div className="progress-bar" style={{ width: '80px' }}>
            <div className="progress-bar__fill" style={{ width: `${overallProgress}%` }}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
