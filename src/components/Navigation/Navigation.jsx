import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import { List } from './Navigation.styled';
import Box from 'components/Box';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <List>
          <li>
            <NavLink to="login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </List>
      )}
    </Box>
  );
}
