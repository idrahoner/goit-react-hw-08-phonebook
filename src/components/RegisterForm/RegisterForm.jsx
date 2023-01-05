import { useState } from 'react';
import { PropTypes } from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.currentTarget.value)}
        />
      </label>
      <label>
        E-mail:{' '}
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
      </label>
      <label>
        Password:{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
      </label>
      <button type="submit"> Sign up</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
