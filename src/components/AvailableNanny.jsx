import React from 'react';
import StyledAvaliableNanny from './styles/AvailableNannyStyle';
import ProfileNanny from '../images/profileNanny.svg';
import theme from '../theme/index';
import useMediaQuery from '../hooks/useMediaQuery';

function AvailableNanny() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const annyScheduleTxt = 'Wednesday, Thursday, Friday - 7:30 - 5:30';

  return (
    <StyledAvaliableNanny>
      <article className="centralized-section">
        <img src={ProfileNanny} alt="Nanny profile" />
        <a href="https://github.com/JungleDevs/react-challenge-001FT">
          Sarah’s day care available now in North Sydney
        </a>
        {isLarge ? <h4>{annyScheduleTxt}</h4> : <h5>{annyScheduleTxt}</h5>}
      </article>
    </StyledAvaliableNanny>
  );
}

export default AvailableNanny;
