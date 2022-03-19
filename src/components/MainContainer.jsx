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
      <Hero />
      <AvailableNanny />
      <ShareNanny isLarge={isLarge} />
      <SectionDivider />
      <LookingForNannyForm isLarge={isLarge} />
    </main>
  );
}

export default MainContainer;
