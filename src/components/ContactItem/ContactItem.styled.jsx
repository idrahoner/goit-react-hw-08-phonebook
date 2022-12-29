import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const ContactText = styled.p`
  margin: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]}px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[1]}px;

  font-size: ${p => p.theme.fontSizes.s}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.circle};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.light};
  box-shadow: ${p => p.theme.shadows.normal};

  transition: ${p => p.theme.transitions.regularScale},
    ${p => p.theme.transitions.regularBgColor};

  :hover,
  :focus {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }

  :disabled {
    background: ${p => p.theme.colors.disabled};
  }
`;
