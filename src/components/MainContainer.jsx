import React from 'react';
import StyledMainContainer from './styles/MainContainerStyle';
import Hero from './Hero';
import AvailableNanny from './AvailableNanny';
import ShareNanny from './ShareNanny';
import LookingForNannyForm from './LookingForNannyForm';
import SectionDivider from './SectionDivider';
import SharedPayments from './SharedPayments';
import Framework from './Framework';

import useMediaQuery from '../hooks/useMediaQuery';
import theme from '../theme/index';

function MainContainer() {
  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  return (
    <StyledMainContainer>
      <Hero isLarge={isLarge} />
      <AvailableNanny isLarge={isLarge} />
      <ShareNanny isLarge={isLarge} />
      <SectionDivider />
      <LookingForNannyForm isLarge={isLarge} />
      <SectionDivider />
      <SharedPayments isLarge={isLarge} />
      <SectionDivider />
      <Framework isLarge={isLarge} />
    </StyledMainContainer>
  );
}

export default MainContainer;
