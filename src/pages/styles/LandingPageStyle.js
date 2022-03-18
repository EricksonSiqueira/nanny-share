import styled from 'styled-components';
import theme from '../../theme';

export default styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

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
`;