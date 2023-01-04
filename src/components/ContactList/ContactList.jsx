import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
