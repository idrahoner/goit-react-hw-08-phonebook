import PropTypes from 'prop-types';
import { HiOutlineX, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoadingStatus,
  removeContact,
  editContact,
} from 'redux/contacts';
import { Contact, ContactText, DeleteButton } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const clickedButtonId = useRef(null);

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
      <button type="button" disabled={buttonStatus} onClick={handleEdit}>
        Edit
      </button>
    </Contact>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
