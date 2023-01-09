import styled from 'styled-components';

import { space, color, layout } from 'styled-system';

export const Square = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 200,
    minHeight: 200,
    backgroundColor: 'primary',
    marginTop: 3,
  },
  space,
  color,
  layout
);

export const Form = styled.form`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;

  margin: auto;
  padding: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[5]}px;

  max-width: 340px;

  font-size: ${p => p.theme.fontSizes.m}px;

  border: ${p => p.theme.borders.formCard};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.formCard};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.text};
`;

export const Input = styled.input`
  height: 40px;
  margin-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.formField};
  border-radius: ${p => p.theme.radii.normal}px;

  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const SubmitButton = styled.button`
  min-width: 150px;

  margin: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal}px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
