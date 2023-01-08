import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Box from 'components/Box';
import Container from 'components/Container';
import { Logo } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Box py={[4, 5]} backgroundColor="primary" color="light" as="header">
        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo to="/">Phonebook</Logo>
          <Navigation />
        </Container>
      </Box>
      <Outlet />
    </>
  );
}
