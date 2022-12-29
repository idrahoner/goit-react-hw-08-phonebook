import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    if (!query.trim().toLowerCase()) {
      return contacts;
    }

    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(query) || phone.includes(query)
    );
  }
);
