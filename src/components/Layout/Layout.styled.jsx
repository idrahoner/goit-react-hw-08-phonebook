import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { typography } from 'styled-system';

export const Logo = styled(Link)`
  color: ${p => p.theme.colors.textLight};

  /* font-size: ${p => p.theme.fontSizes.l}px; */
  text-decoration: none;
  ${typography};
`;
