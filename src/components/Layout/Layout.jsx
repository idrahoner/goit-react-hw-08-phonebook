import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Box from 'components/Box';
import { Logo } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={5}
        mb={5}
        borderBottom="normal"
        as="header"
      >
        <Logo to="/">Phonebook</Logo>
        <Navigation />
      </Box>
      <Outlet />
    </>
  );
}
