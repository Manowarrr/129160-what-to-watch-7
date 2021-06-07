import React from 'react';
import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light></Logo>

        <h1 className="page-title user-page__title">Page not found</h1>
      </header>
    </div>
  );
}

export default NotFoundScreen;
