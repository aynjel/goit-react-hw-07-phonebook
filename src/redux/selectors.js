// src/redux/selectors.js

// Selector for retrieving contacts from the state
export const getContacts = state => state.contacts.contacts;

// Selector for retrieving the current filter value
export const getFilter = state => state.filter;
