import { checkEqual } from 'utils';

export function hasInclude(newName, newNumber, contactList) {
  return contactList.reduce(
    (acc, { name, number }) =>
      !acc
        ? (acc = checkEqual(name, newName)) ||
          (acc = checkEqual(number, newNumber))
        : acc,
    ''
  );
}
