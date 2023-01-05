import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth';
import LoginForm from 'components/LoginForm';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = user => dispatch(loginUser(user));

  return <LoginForm onSubmit={handleSubmit} />;
}
