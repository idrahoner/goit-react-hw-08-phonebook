import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth';
import RegisterForm from 'components/RegisterForm';

export default function Registration() {
  const dispatch = useDispatch();

  const handleSubmit = user => dispatch(registerUser(user));

  return <RegisterForm onSubmit={handleSubmit} />;
}
