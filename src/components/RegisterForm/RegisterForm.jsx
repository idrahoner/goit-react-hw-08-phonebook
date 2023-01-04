import { useState } from 'react';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label>
        Username:{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
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
          valuse={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
      </label>
      <button type="submit"> Sign up</button>
    </form>
  );
}
