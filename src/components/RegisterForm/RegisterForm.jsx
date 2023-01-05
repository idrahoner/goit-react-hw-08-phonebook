import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Label, Input, SubmitButton } from './RegisterForm.styled';

export default function RegisterForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username:{' '}
        <Input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.currentTarget.value)}
        />
      </Label>
      <Label>
        E-mail:{' '}
        <Input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
      </Label>
      <Label>
        Password:{' '}
        <Input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
      </Label>
      <SubmitButton type="submit"> Sign up</SubmitButton>
    </Form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
