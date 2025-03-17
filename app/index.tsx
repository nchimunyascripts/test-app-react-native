import React from 'react';
import { Button, Text, View } from 'react-native';

const processContact = (contact) => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
});
class Login extends React.Component {
  state = {
    getUser: null,
  };
  fetchUsers = async () => {
    const response = await fetch('http://0.0.0.0:8000/users/1');
    const result = await response.json();
    // return result.map(processContact);
    console.log(result);
  };
  componentDidMount(): void {
    this.fetchUsers();
  }
  render(): React.ReactNode {
    return (
      <View>
        <Text>Login</Text>
        <Button title="Fetch" onPress={() => this.fetchUsers} />
      </View>
    );
  }
}
export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World</Text>
      <Login />
    </View>
  );
}
