import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Label, Input, SubmitButton } from 'components/Form';
import Container from 'components/Container';
import Box from 'components/Box';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <Box py={[5, 6]} as="section">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>
            E-mail:{' '}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
            ></Input>
          </Label>
          <Label>
            Password:{' '}
            <Input
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.currentTarget.value)}
            ></Input>
          </Label>
          <SubmitButton type="submit">Log in</SubmitButton>
        </Form>
      </Container>
    </Box>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
