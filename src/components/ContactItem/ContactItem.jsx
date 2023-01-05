import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiOutlineX, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoadingStatus,
  removeContact,
  editContact,
} from 'redux/contacts';
import {
  Contact,
  ContactText,
  DeleteButton,
  OpenModalButton,
} from './ContactItem.styled';
import Modal from 'components/Modal';
import PhonebookForm from 'components/PhonebookForm';

export default function ContactItem({ id, name, number }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const clickedButtonId = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemove = () => {
    clickedButtonId.current = id;
    dispatch(removeContact(id));
  };

  const handleEdit = () => {
    clickedButtonId.current = id;
    dispatch(editContact({ id, name, number }));
  };

  const buttonStatus = loading
    ? clickedButtonId.current === id
    : (clickedButtonId.current = null);

  return (
    <Contact>
      <ContactText>
        <b>{name}</b>: {number}
      </ContactText>
      <OpenModalButton
        type="button"
        disabled={buttonStatus}
        onClick={toggleModal}
      >
        Edit
      </OpenModalButton>
      <DeleteButton
        type="button"
        onClick={handleRemove}
        disabled={buttonStatus}
      >
        {buttonStatus ? (
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
