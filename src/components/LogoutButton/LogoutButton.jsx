import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth';
import { SignOutButton } from './LogoutButton.styled';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SignOutButton type="button" onClick={handleLogout}>
      Log Out
    </SignOutButton>
  );
}
