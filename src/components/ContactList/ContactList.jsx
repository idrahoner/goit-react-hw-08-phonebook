import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
}
