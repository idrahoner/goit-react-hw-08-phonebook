import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, registerUser } from 'redux/auth';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(registerUser({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    event.currentTarget.reset();
  };

  if (isLoggedIn) {
    return null;
  }

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
