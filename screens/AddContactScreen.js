import React from 'react';
import AddContactForm from '../components/AddContactForm';

export default class AddContactScreen extends React.Component {
  handleSubmit = (formState) => {
    this.props.screenProps.AddContact(formState);
    this.props.nagivation.nagivate('ContactList');
  };
  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />;
  }
}
