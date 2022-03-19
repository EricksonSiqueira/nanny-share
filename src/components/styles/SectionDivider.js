import styled from 'styled-components';
import theme from '../../theme';

export default styled.div`
  width: 328px;
  height: 2px;
  background-color: ${theme.colors.grey88};
  margin: 0 auto;

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    width: 784px;
  }
`;
