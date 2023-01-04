import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, logoutUser } from 'redux/auth';

export default function LogoutButton() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
}
