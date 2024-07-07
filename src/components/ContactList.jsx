import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.contactName}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li className={styles.contactItem} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
