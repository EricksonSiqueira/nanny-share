import styled from 'styled-components';
import theme from '../../theme';

export default styled.footer`
  background-color: ${theme.colors.white};
  height: 574px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  section.footer-txt {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 21px;
    border-radius: 4px;

    height: 68px;
    width: 304px;
    background-color: ${theme.colors.secondary};

    transition: 200ms all ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.secondaryHover};
    }
  }

  button section p {
    text-align: left;
    color: ${theme.colors.white};
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  nav section.page {
    max-width: 220px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 17px 32px;
    flex-wrap: wrap;
  }

  nav section.page h5 {
    transition: 150ms all ease-in-out;

    &:hover {
      color: ${theme.colors.footerLinkHover};
    }
  }

  nav section.social-media {
    display: flex;
    justify-content: center;
    column-gap: 16px;
  }

  nav section.social-media img {
    border-radius: 50%;

    transition: 150ms all ease-in-out;
    &:hover {
      background-color: ${theme.colors.grey88};
    }
  }

  nav section a {
    text-decoration: none;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    height: 540px;
    width: 100%;
    gap: 24px;

    section.footer-txt {
      gap: 16px;
      margin-bottom: 8px;
    }

    nav {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 54px;
      margin-bottom: 66px;
      gap: 0;
    }
    nav img.hapu-logo {
      margin-right: 24vw;
    }

    nav section.page {
      column-gap: 30px;
      max-width: 100%;
      flex-wrap: nowrap;
      margin-right: 15vw;
    }


    p.copyright {
      margin-bottom: 8px;
    }
  }
`;
