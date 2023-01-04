import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setEmail('');
        setPassword('');
      }}
    >
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
