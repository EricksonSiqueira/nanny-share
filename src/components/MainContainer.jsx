import React from 'react';
import Hero from './Hero';
import AvailableNanny from './AvailableNanny';
import ShareNanny from './ShareNanny';
import LookingForNannyForm from './LookingForNannyForm';
import SectionDivider from './styles/SectionDivider';
import useMediaQuery from '../hooks/useMediaQuery';
import theme from '../theme/index';

function MainContainer() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  return (
    <main>
      <Hero isLarge={isLarge} />
      <AvailableNanny isLarge={isLarge} />
      <ShareNanny isLarge={isLarge} />
      <SectionDivider />
      <LookingForNannyForm isLarge={isLarge} />
      <SectionDivider />
    </main>
  );
}

export default MainContainer;
