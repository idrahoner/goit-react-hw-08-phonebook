import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { HiOutlineX, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoadingStatus,
  removeContact,
  editContact,
} from 'redux/contacts';
import Modal from 'components/Modal';
import PhonebookForm from 'components/PhonebookForm';
import {
  Contact,
  ContactText,
  DeleteButton,
  OpenModalButton,
} from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const [showModal, setShowModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemove = () => {
    setDisabledButton(true);
    dispatch(removeContact(id));
  };

  const handleEdit = contact => {
    setDisabledButton(true);
    dispatch(editContact({ id, ...contact }));
    toggleModal();
    toast.success(
      `Hooray! You have successfully edited ${contact.name}'s contact!`
    );
  };

  useEffect(() => {
    if (!loading) {
      setDisabledButton(false);
    }
  }, [loading]);

  return (
    <Contact>
      <ContactText>
        <b>{name}</b>: {number}
      </ContactText>
      <OpenModalButton
        type="button"
        disabled={disabledButton}
        onClick={toggleModal}
      >
        Edit
      </OpenModalButton>
      <DeleteButton
        type="button"
        onClick={handleRemove}
        disabled={disabledButton}
      >
        {disabledButton ? (
          <HiOutlineDotsHorizontal size="1.5em" />
        ) : (
          <HiOutlineX size="1.5em" />
        )}
      </DeleteButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <PhonebookForm onSubmit={handleEdit} name={name} number={number} />
        </Modal>
      )}
    </Contact>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
