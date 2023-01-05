import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, fetchUser } from 'redux/auth';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import Layout from 'components/Layout';
import Greetings from 'pages/Greetings';
import { PrivateRoute, RestrictedRoute } from 'utils';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<Greetings />} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
