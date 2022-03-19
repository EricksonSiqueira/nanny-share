import styled from 'styled-components';
import theme from '../../theme';

export default styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.background};

  div {
    width: 328px;
    height: 2px;
    background-color: ${theme.colors.grey88};
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    div {
      width: 784px;
    }
  }
`;
