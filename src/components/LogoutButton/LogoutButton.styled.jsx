import styled from 'styled-components';

export const SignOutButton = styled.button`
  margin: auto;
  padding: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal}px;

  font-size: ${p => p.theme.fontSizes.s}px;
`;
