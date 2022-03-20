import React from 'react';
import Header from '../components/Header';
import StyledLandingPage from './styles/LandingPageStyle';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <StyledLandingPage>
      <Header />
      <MainContainer />
      <Footer />
    </StyledLandingPage>
  );
}

export default LandingPage;
