import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import { List, ListItem, AuthLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <List>
          <ListItem>
            <AuthLink to="login">Log In</AuthLink>
          </ListItem>
          <ListItem>
            <AuthLink to="register">Register</AuthLink>
          </ListItem>
        </List>
      )}
    </>
  );
}
