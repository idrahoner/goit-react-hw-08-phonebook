import { useEffect, useState } from 'react';
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
import Modal from 'components/Modal';

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

  if (loading && !contacts.length) {
    return <Loader />;
  }

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Add contact
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <PhonebookForm onSubmit={toggleModal} />
        </Modal>
      )}

      <Filter />
      <ContactList />
    </>
  );
}
