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
        <nav>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>Create Your Nanny share</h5></a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>Browse Shares</h5></a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>OurStory</h5></a>
        </nav>
        <section>
          <button type="button">
            <h5>Become a Nanny Share Host</h5>
          </button>
          <h5>Sign in</h5>
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
