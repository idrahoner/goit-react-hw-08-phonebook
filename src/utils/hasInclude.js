import { checkEqual } from 'utils';

export function hasInclude(newName, newNumber, contactList) {
  return contactList.reduce(
    (acc, { name, phone }) =>
      !acc
        ? (acc = checkEqual(name, newName)) ||
          (acc = checkEqual(phone, newNumber))
        : acc,
    ''
  );
}
