import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from '../scripts/contacts';
import ContactsListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';
import { createSwitchNavigator } from 'react-navigation';

// import Example from './Example';
// export default Example;
// interface Contact {
//   name: string;
//   phone: string
// }

// interface AppState {
//   showContacts: boolean;
//   contacts: Contact[];
// }

const AppNavigator = createSwitchNavigator(
  {
    AddContact: AddContactScreen,
    ContactsList: ContactsListScreen,
  },
  { initialRouteName: 'ContactList' },
);
export default class App extends React.Component {
  state = {
    showContacts: true,
    contacts: contacts,
  };

  addContact = (newContact: any) => {
    this.setState((prevState) => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return <AppNavigator screenProps={{ contacts: this.state.contacts }} />;
  }
}
