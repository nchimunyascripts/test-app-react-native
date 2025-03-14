import SectionListContacts from '../components/SectionListContacts';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';

export default class ContactListScreen extends Component {
  state = {
    showContacts: false,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 5, marginTop: 10 }}>
          <Button title="toggle contacts" onPress={this.toggleContacts} />
        </View>
        <View style={{ marginBottom: 5 }}>
          <Button title="Add Contact" onPress={this.showForm} />
        </View>
        {this.state.showContacts && (
          <SectionListContacts contacts={this.props.screenProps.contacts} />
        )}
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
