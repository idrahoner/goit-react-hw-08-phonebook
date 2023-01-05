import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth';
import {
  selectLoadingStatus,
  selectContacts,
  fetchContacts,
} from 'redux/contacts';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import PhonebookForm from 'components/PhonebookForm';
import Loader from 'components/Loader';

export default function ContactsLayout() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoadingStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  if (loading && !contacts.length) {
    return <Loader />;
  }

  return (
    <>
      <PhonebookForm />
      <Filter />
      <ContactList />
    </>
  );
}
