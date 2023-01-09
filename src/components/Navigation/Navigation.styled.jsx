import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;

  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.textLight};
`;
