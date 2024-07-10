import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // const savedContact = localStorage.getItem('contacts');

    // this.state = {
    //   contacts: savedContact ? JSON.parse(savedContact) : [],

    // };
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.setState(
  //       prevState => ({ contacts: prevState.contacts }),
  //       () => {
  //         localStorage.setItem('contacts', this.state.contacts);
  //       }
  //     );
  //   }, 1000);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (state, props) {
  //     prevProps = this.
  //   }
  // }

  handleDelete(id) {
    this.props.deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

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
                onClick={() => this.handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
