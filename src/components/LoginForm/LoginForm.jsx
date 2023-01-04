import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, loginUser } from 'redux/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(loginUser({ email, password }));

    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return null;
  }

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
