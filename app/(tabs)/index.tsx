import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import contacts , {compareNames} from '../../assets/contacts';
import ContactsList from './Contactslist';
import AddContactForm from './AddContactForm';

// interface Contact {
//   name: string;
//   phone: string
// }

interface AppState {
  showContacts: boolean;
  showForm: boolean;
  contacts: Contact[];
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  sort = () => {
    this.setState(prevState => ({contacts: [...prevState.contacts].sort(compareNames),}))
  }

  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 5, marginTop: 10}}>
          <Button title="toggle contacts" onPress={this.toggleContacts} />
        </View>
        <Button title='Add Contact' onPress={this.toggleForm} />
        {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: Constants.statusBarHeight,
  },
});
