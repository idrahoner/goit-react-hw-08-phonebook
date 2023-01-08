import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes.l}px;
  text-decoration: none;
`;
