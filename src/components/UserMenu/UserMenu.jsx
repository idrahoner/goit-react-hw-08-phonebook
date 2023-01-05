import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth';
import LogoutButton from 'components/LogoutButton';
import Box from 'components/Box';
import { UserLogin } from './UserMenu.styled';

export default function UserMenu() {
  const email = useSelector(selectUserEmail);

  return (
    <Box display="flex" gridGap={4}>
      <UserLogin>{email}</UserLogin>
      <LogoutButton />
    </Box>
  );
}
