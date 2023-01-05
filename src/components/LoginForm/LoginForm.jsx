import { useState } from 'react';
import { PropTypes } from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:{' '}
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        ></input>
      </label>
      <label>
        Password:{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        ></input>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
