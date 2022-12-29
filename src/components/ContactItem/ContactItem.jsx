import PropTypes from 'prop-types';
import { HiOutlineX, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operationsContacts';
import { selectLoadingStatus } from 'redux/selectors';
import { Contact, ContactText, DeleteButton } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const clickedButtonId = useRef(null);

  const handleRemove = () => {
    clickedButtonId.current = id;
    dispatch(removeContact(id));
  };

  const buttonStatus = loading && clickedButtonId.current === id;

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
    </Contact>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
