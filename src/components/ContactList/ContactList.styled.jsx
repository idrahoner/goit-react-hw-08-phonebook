import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.m}px;
`;
