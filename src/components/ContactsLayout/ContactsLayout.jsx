import { useSelector } from 'react-redux';
import { selectLoadingStatus, selectContacts } from 'redux/selectors';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

export default function ContactsLayout() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoadingStatus);

  if (loading && !contacts.length) {
    return <Loader />;
  }

  return (
    <>
      <Filter />
      <ContactList />
    </>
  );
}
