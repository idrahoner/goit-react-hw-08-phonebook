import { useDispatch, useSelector } from 'react-redux';
import {
  selectUsername,
  selectIsLoggedIn,
  selectAuthError,
  logoutUser,
} from 'redux/auth';

export default function LogoutButton() {
  const username = useSelector(selectUsername);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  // console.log('It`s LogoutButton');
  // console.log('LogoutButton username: ', username);
  // console.log('LogoutButton isLoggedIn: ', isLoggedIn);
  // console.log('LogoutButton authError: ', authError);
  // console.log('LogoutButton token: ', token);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isLoggedIn) {
    return null;
  }

  return <button onClick={handleLogout}>Log Out</button>;
}
