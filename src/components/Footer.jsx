import React from 'react';
import StyledFooter from './styles/FooterStyle';

import CalendarIcon from '../images/calendarFooterBtn.svg';
import hapuLogo from '../images/hapuLogo.svg';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import Instagram from '../images/instagram.svg';

import SectionDivider from './SectionDivider';

import useMediaQuery from '../hooks/useMediaQuery';
import theme from '../theme';

function Footer() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const headindTxt = 'Become a nanny share host';

  return (
    <StyledFooter>
      <section className="footer-txt">
        {isLarge ? <h2>{headindTxt}</h2> : <h3>{headindTxt}</h3>}
        <p className={isLarge ? 'large-txt' : 'medium-txt'}>
          Takes less than 5 minutes to get started
        </p>
      </section>
      <button type="button">
        <img src={CalendarIcon} alt="calendar icon" />
        <section>
          <p className="medium-txt">
            Create Your Nanny Share
          </p>
          <p className="xsmall-txt">
            Takes less than 5 minutes
          </p>
        </section>
      </button>
      <a href="https://github.com/EricksonSiqueira" target="_blank" rel="noreferrer">
        Or browse local nanny-shares
      </a>
      <nav>
        <a href="https://github.com/JungleDevs/react-challenge-001FT">
          <img src={hapuLogo} alt="hapu logo" className="hapu-logo" />
        </a>
        <section className="page">
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>Share Your Nanny</h5></a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>OurStory</h5></a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>Blog</h5></a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT"><h5>Terms & Privacy</h5></a>
        </section>
        <section className="social-media">
          <a href="https://github.com/JungleDevs/react-challenge-001FT">
            <img src={Facebook} alt="facebook icon" />
          </a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT">
            <img src={Twitter} alt="twitter icon" />
          </a>
          <a href="https://github.com/JungleDevs/react-challenge-001FT">
            <img src={Instagram} alt="instagram icon" />
          </a>
        </section>
      </nav>
      {!isLarge && <SectionDivider />}
      <p className="xsmall-txt copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </StyledFooter>
  );
}

export default Footer;
