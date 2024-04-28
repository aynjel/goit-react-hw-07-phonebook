import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    // Placeholder for future Redux action
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // Placeholder for future Redux action
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    dispatch(setFilter(newFilter));
  };

  // Calculate filtered contacts directly within the App component
  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .reverse();

  return (
    <main>
      <div className="contact-container">
        <div className="contact-form">
          <ContactForm addContact={handleAddContact} contacts={contacts} />
        </div>
        <div className="contact-content">
          <Filter
            openAddContact=""
            filter={filter}
            setFilter={handleSetFilter}
          />
          <div className="contact-lists">
            <ContactList
              contacts={filteredContacts} // Passing the filteredContacts as prop
              deleteContact={handleDeleteContact}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
