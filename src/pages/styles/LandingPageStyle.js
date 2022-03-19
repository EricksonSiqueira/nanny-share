import styled from 'styled-components';
import theme from '../../theme';

export default styled.div`

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, a {
    font-weight: 500;
  }

  h1 {
    font-size: 40px;
    line-height: 48px;
  }

  h2 {
    font-size: 28px;
    line-height: 32px;
  }

  h3 {
    font-size: 22px;
    line-height: 32px;
  }

  a {
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.secondary};
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
  .centralized-section {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
