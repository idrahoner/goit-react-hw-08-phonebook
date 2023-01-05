import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth';
import {
  selectLoadingStatus,
  selectContacts,
  fetchContacts,
  addContact,
} from 'redux/contacts';
import { OpenModalButton } from './Contacts.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import PhonebookForm from 'components/PhonebookForm';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Box from 'components/Box';

export default function ContactsLayout() {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoadingStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = contact => {
    dispatch(addContact(contact));
    toggleModal();
  };

  if (loading && !contacts.length) {
    return <Loader />;
  }

  return (
    <Box display="flex" flexDirection="column" p={5}>
      <OpenModalButton type="button" onClick={toggleModal}>
        Add contact
      </OpenModalButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <PhonebookForm onSubmit={handleSubmit} />
        </Modal>
      )}

      <Filter />
      <ContactList />
    </Box>
  );
}
