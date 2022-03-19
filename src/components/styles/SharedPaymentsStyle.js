import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  height: 746px;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  article h3 {
    max-width: 226px;
  }

  article p, article a {
    max-width: 328px;
  }

  article a {
    margin-top: 8px;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    flex-direction: row;
    gap: 44px;
    height: 528px;

    article {
      align-items: flex-start;
      text-align: left;
      gap: 40px;
    }

    article h2 {
      max-width: 411px;
    }

    article p, article a {
      max-width: 484px;
    }

    article a {
      margin-top: 0;
    }
  }
`;
