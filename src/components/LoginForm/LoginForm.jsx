import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUsername,
  selectIsLoggedIn,
  selectAuthError,
  loginUser,
} from 'redux/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const username = useSelector(selectUsername);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  // console.log('It`s LoginForm');
  // console.log('LoginForm username: ', username);
  // console.log('LoginForm isLoggedIn: ', isLoggedIn);
  // console.log('LoginForm authError: ', authError);
  // console.log('LoginForm token: ', token);

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
