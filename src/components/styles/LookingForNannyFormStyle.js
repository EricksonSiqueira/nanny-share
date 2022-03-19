import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  background-color: ${theme.colors.background};
  height: 496px;
  width: 100%;

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  article section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  article section h3, article section p {
    max-width: 328px;
  }

  article form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  article form input, article form button {
    height: 48px;
    width: 91vw;
    border-radius: 4px;
  }

  article form input {
    border: 1px solid ${theme.colors.grey88};
    padding-left: 20px;

    &::placeholder {
      font-weight: 400px;
      size: 14px;
      line-height: 20px;
    }
  }

  article form button {
    background-color: ${theme.colors.primary};
    margin-top: 8px;
    cursor: pointer;
    transition: 300ms all ease-in-out;

    &:disabled {
      background-color: #adadad;
      cursor: not-allowed;
    }
  }

  article form button h5 {
    color: ${theme.colors.white};
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    height: 322px;

    article {
      gap: 74px;
    }

    article section h3, article section p {
      max-width: 100%;
    }

    article form {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }

    article form input {
      width: 232px;
    }

    article form button {
      width: 96px;
      margin-top: 0;
    }
  }
`;
