import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { HiOutlineXCircle } from 'react-icons/hi2';
import Box from 'components/Box';

const ESCAPE_KEY = 'Escape';

const modalPortal = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const escapeModal = event => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, [onClose]);

  const closeModal = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Box
      onClick={closeModal}
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      z-index="1200"
    >
      <HiOutlineXCircle
        color="white"
        size="2em"
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          pointerEvents: 'none',
        }}
      />
      <Box
        maxWidth="calc(100vw - 48px)"
        maxHeight="calc(100vh - 24px)"
        backgroundColor="light"
        borderRadius="normal"
      >
        {children}
      </Box>
    </Box>,
    modalPortal
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
