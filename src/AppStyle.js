import styled from 'styled-components';
import theme from './theme';

export default styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

  * {
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.grey24};
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, a {
    font-weight: 500;
  }

  h2, h3 {
    line-height: 32px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 16px;
    line-height: 24px;
  }
  h5 {
    font-size: 14px;
    line-height: 20px;
  }

  a {
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.secondary};
  }

  button {
    border: none;
  }

  .large-txt {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  .medium-txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .small-txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .xsmall-txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;
