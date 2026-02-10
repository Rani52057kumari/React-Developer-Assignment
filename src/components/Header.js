import React from 'react';

function Header() {
  const handleNavClick = (page) => {
    alert(`Navigating to ${page}`);
  };

  return (
    <header className="header">
      <h1 className="app-title">User Profile App</h1>
      <nav className="navigation">
        <span onClick={() => handleNavClick('Home')} className="nav-link">Home</span>
        <span className="separator">|</span>
        <span onClick={() => handleNavClick('Profile')} className="nav-link">Profile</span>
        <span className="separator">|</span>
        <span onClick={() => handleNavClick('Contact')} className="nav-link">Contact</span>
      </nav>
    </header>
  );
}

export default Header;
