import { View, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import contacts, { compareNames } from '@/services/contacts';
import ContactsList from '@/components/ContactsList';
import AddContactForm from '@/components/AddContactForm';

export type Contact = {
  name: string;
  phone: string;
};

interface AppState {
  showContacts: boolean;
  showForm: boolean;
  contacts: Contact[];
}
export default class App extends Component<{}, AppState> {
  state: AppState = {
    showContacts: false,
    contacts: contacts,
    showForm: false,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };
  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };
  render() {
    if (this.state.showForm) return <AddContactForm />;
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Constants.statusBarHeight,
  },
});
