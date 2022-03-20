import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background};
  height: 524px;
  width: 100%;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    text-align: center;
  }

  article h3, article p {
    max-width: 328px;
  }

  article img {
    margin-bottom: 8px;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`}{
    height: 508px;

    article {
      gap: 40px;
    }

    article p {
      max-width: 784px;
    }

    article img {
      margin-bottom: 0;
    }
  }
`;
