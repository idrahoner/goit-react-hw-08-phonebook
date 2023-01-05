import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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
import { hasInclude } from 'utils';

export default function Contacts() {
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
    const isAlreadyHave = hasInclude(contact.name, contact.number, contacts);
    toggleModal();

    if (isAlreadyHave) {
      return toast.info(isAlreadyHave + ' is already in contacts.');
    }
    toast.success(
      `Hooray! You have successfully added ${contact.name}'s contact!`
    );
    dispatch(addContact(contact));
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
