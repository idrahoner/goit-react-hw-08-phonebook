import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
}
