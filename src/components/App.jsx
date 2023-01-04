import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsError, fetchContacts } from 'redux/contacts';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import ContactsLayout from 'components/ContactsLayout';
import Box from 'components/Box';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <Box p={5} as="section">
        <Section title="Authorisation">
          <Box mb={4}>
            <LoginForm />
          </Box>
          <RegisterForm />
        </Section>
      </Box>
      <Box p={5} as="section">
        <Section title="Phonebook">
          <PhonebookForm />
        </Section>
      </Box>
      <Box p={5} as="section">
        <Section title="Contacts">
          <ContactsLayout />
        </Section>
      </Box>
    </>
  );
}
