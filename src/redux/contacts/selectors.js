import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter';

export const selectContacts = state => state.contacts.items;

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterInput) => {
    const query = filterInput.trim().toLowerCase();

    console.log('query: ', query);
    console.log('contacts: ', contacts);
    if (!query) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(query) || number.includes(query)
    );
  }
);
