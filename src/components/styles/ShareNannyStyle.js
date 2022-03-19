import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  background-color: ${theme.colors.background};
  width: 100%;
  height: 792px;

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  article section {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  article section h3 {
    width: 218px;
  }

  article section p {
    width: 328px;
  }

  article section a.get-started {
    margin-top: 8px;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    height: 632px;

    article {
      flex-direction: row-reverse;
      gap: 56px;
    }

    article section {
      align-items: flex-start;
      text-align: left;
      gap: 40px;
    }

    article section h2 {
      width: 270px;
    }

    article section p {
      width: 444px;
    }
  }
`;
