import React from 'react';
import Header from '../components/Header';
import StyledLandingPage from './styles/LandingPageStyle';
import MainContainer from '../components/MainContainer';

function LandingPage() {
  return (
    <StyledLandingPage>
      <Header />
      <MainContainer />
    </StyledLandingPage>
  );
}

export default LandingPage;
