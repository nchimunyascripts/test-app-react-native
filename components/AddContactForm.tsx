import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class AddContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };
  handleNameChange = (name: string) => {
    this.setState({ name });
  };
  handlePhoneChange = (phone: string) => {
    this.setState({ phone });
  };
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          keyboardType="numeric"
        />
        <Button title="Add Contact" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default AddContactForm;
