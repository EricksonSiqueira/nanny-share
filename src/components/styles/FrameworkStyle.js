import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 476px;
  background-color: ${theme.colors.background};

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  article h3 {
    max-width: 243px;
  }

  article p, article a {
    max-width: 328px;
  }

  article a {
    margin-top: 8px;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    height: 876px;

    article {
      gap: 40px;
    }

    article h2, article a {
      max-width: 100%;
    }

    article a {
      margin-top: 0;
    }

    article p {
      max-width: 784px;
    }

    article img {
      margin-top: 24px;
    }
  }
`;
