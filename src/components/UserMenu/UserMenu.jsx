import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth';
import LogoutButton from 'components/LogoutButton';
import Box from 'components/Box';

export default function UserMenu() {
  const email = useSelector(selectUserEmail);

  return (
    <Box>
      <p>{email}</p>
      <LogoutButton />
    </Box>
  );
}
