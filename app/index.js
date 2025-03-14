// import React from 'react';
// import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// import contacts, { compareNames } from '../scripts/contacts';
// import { createSwitchNavigator } from 'react-navigation';
// import AddContactScreen from '../screens/AddContactScreen';
// import ContactListScreen from '../screens/ContactListScreen';

// const AppNavigator = createSwitchNavigator(
//   {
//     AddContact: AddContactScreen,
//     ContactList: ContactListScreen,
//   },
//   { initialRouteName: 'ContactList' },
// );

// export default class App extends React.Component {
//   state = {
//     contacts: contacts,
//   };

//   addContact = (newContact) => {
//     this.setState((prevState) => ({
//       showForm: false,
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   render() {
//     return (
//       <AppNavigator
//         screenProps={{
//           contacts: this.state.contacts,
//           addContact: this.addContact,
//         }}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingLeft: 10,
//     paddingRight: 10,
//     backgroundColor: '#fff',
//     paddingTop: Constants.statusBarHeight,
//   },
// });
import Example from './0-example';
export default Example;
