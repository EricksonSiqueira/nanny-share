import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  height: 216px;
  width: 100vw;
  background-color: ${theme.colors.white};

  article img {
    width: 56px;
    height: 56px;
  }

  article h5 {
    font-weight: bold;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 100%;
  }

  article a {
    max-width: 212px;
    text-align: center;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    height: 112px;

    article {
      flex-direction: row;
      gap: 2px;
    }

    article img {
      margin-right: 30px;
    }

    article h4 {
      font-weight: bold;
    }

    article a {
      max-width: 100%;
    }
  }
`;
