import React, {Component} from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ContactForm componentDidUpdate')
    if(this.state.contacts !==prevState.contacts){
       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmit = data => {
  console.log(data);
  };

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
    return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));    
  };

    validateContact = (inputData) => {
    return this.state.contacts.find(contact => contact.name === inputData.name);
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
      };

    
    getVisibleContacts = () => {
      const { contacts, filter } = this.state;
      const normalizeFilter = filter.toLowerCase();

      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
      );
    };

    deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    };
     
  
    render() {
      const { filter } = this.state;
      const visibleContacts = this.getVisibleContacts();
      
      return (
        <div className={css.phoneContainer}>
        <h1 className={css.phoneTitle}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>

        <h2 className={css.phoneTitle}>Contacts</h2>
        <Filter onChange={this.changeFilter} value={filter} /> 
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </div>
      );
    }
    
  };


