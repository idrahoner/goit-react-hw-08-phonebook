import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;
