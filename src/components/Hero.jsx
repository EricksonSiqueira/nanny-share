import React from 'react';
import StyledHero from './styles/HeroStyle';
import HeroBackgroundMobile from '../images/heroMobile.svg';
import HeroBackgroundDesktop from '../images/heroDesktop.svg';
import ImageHero from '../images/nannyShare.svg';
import playButton from '../images/playButton.svg';
import theme from '../theme/index';
import useMediaQuery from '../hooks/useMediaQuery';

function Hero() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const heroTitle = 'Easily create or join a local nanny share with Hapu';

  return (
    <StyledHero className="centalized-section">
      <article>
        <section className="hapu-txt">
          {isLarge ? <h1>{heroTitle}</h1> : <h2>{heroTitle}</h2>}
          <p className={isLarge ? 'large-txt' : 'medium-txt'}>
            Hapu is Airbnb for nanny share. Share your home,
            nanny and costs and create new flexible, affordable solutions in childcare.
          </p>
        </section>
        <img
          src={isLarge ? HeroBackgroundDesktop : HeroBackgroundMobile}
          alt="happy family in the kitchen"
          className="hero-bg"
        />
        <section className="hapu-btn">
          <button type="button" className="playBtn">
            <img src={playButton} alt="round play" />
          </button>
          <a href="https://github.com/JungleDevs/react-challenge-001FT">
            See hapu in action (27 seconds)
          </a>
        </section>
      </article>
      {isLarge && <img className="nanny-connection" src={ImageHero} alt="nanny share connection" />}
    </StyledHero>
  );
}

export default Hero;
