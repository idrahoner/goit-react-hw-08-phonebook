import styled from 'styled-components';
import Box from 'components/Box';

const Container = styled(Box)`
  max-width: 480px;
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]}px;
  margin: 0 auto;

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    max-width: 768px;
    padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 1280px;
  }
`;

export default Container;
