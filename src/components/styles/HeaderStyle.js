import styled from 'styled-components';
import theme from '../../theme';

export const MobileHeader = styled.header`
  width: 100%;
  height: 64px;
  position: absolute;

  img.badge-img {
    position: absolute;
    top: 0;
    left: 16px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 16px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 234px;
    height: 44px;
    border: none;
    border-radius: 4px;
  }

  button h5, a h5 {
    color: ${theme.colors.white};
  }

`;

export const DesktopHeader = styled.header`
  width: 100%;
  height: 72px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 32px;
    margin-left: 108px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 23px;
    margin-right: 32px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.white};
  }

  nav.header-nav a h5  {
    transition: 150ms all ease-in-out;

    &:hover {
      color: ${theme.colors.grey88};
    }
  }

  h5 {
    color: ${theme.colors.white};
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }

  img.badge-img {
    position: absolute;
    top: 0;
    left: 20px;
  }

  button.become-nanny {
    background-color: ${theme.colors.primary};
    width: 234px;
    height: 44px;
    border: none;
    border-radius: 4px;
    
    transition: 200ms all ease-in-out;

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  }

  button.sign-in {
    background-color: rgba(0, 0, 0, 0);
    
  }

  button.sign-in h5 {
  transition: 150ms all ease-in-out;

    &:hover {
      color: ${theme.colors.grey88};
    }
  }


`;
