import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 400px;
  padding: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const InputField = styled.input`
  margin-top: ${p => p.theme.space[2]}px;

  width: 250px;
  height: 20px;

  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const SubmitButton = styled.button`
  min-width: 150px;
  height: 25px;

  margin-right: auto;

  font-size: ${p => p.theme.fontSizes.s}px;
`;
