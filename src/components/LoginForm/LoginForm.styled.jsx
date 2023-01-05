import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: auto;
  padding: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[5]}px;

  max-width: 340px;
  /* min-height: 400px; */

  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 20px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const SubmitButton = styled.button`
  margin: auto;
  font-size: ${p => p.theme.fontSizes.m}px;
`;
