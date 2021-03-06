import React from 'react';
import { MobileHeader, DesktopHeader } from './styles/HeaderStyle';
import headerLogoSvg from '../images/badge.svg';
import theme from '../theme/index';
import useMediaQuery from '../hooks/useMediaQuery';

function Header() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  if (isLarge) {
    return (
      <DesktopHeader>
        <img
          src={headerLogoSvg}
          alt="nanny share badge"
          className="badge-img"
        />
        <nav className="header-nav">
          <a href="https://github.com/EricksonSiqueira/nanny-share" target="_blank" rel="noreferrer">
            <h5>Create Your Nanny share</h5>
          </a>
          <a href="https://github.com/EricksonSiqueira/nanny-share" target="_blank" rel="noreferrer">
            <h5>Browse Shares</h5>
          </a>
          <a href="https://github.com/EricksonSiqueira/nanny-share" target="_blank" rel="noreferrer">
            <h5>OurStory</h5>
          </a>
        </nav>
        <section>
          <button type="button" className="become-nanny">
            <h5>Become a Nanny Share Host</h5>
          </button>
          <button type="button" className="sign-in">
            <h5>Sign In</h5>
          </button>
        </section>
      </DesktopHeader>
    );
  }
  return (
    <MobileHeader>
      <img
        src={headerLogoSvg}
        alt="nanny share badge"
        className="badge-img"
      />
      <button type="button">
        <h5>Become a Nanny Share Host</h5>
      </button>
    </MobileHeader>
  );
}

export default Header;
