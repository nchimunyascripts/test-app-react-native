import React from 'react';
import { Button, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

class ScreenComponentOne extends React.Component {
  render(): React.ReactNode {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderColor: 'teal',
          borderWidth: 20,
        }}
      >
        <Button
          title="Go to Screen Two"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  render(): React.ReactNode {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderColor: 'orange',
          borderWidth: 20,
        }}
      >
        <Button
          title="Go to Screen one"
          onPress={() => this.props.navigation.navigate('RouteNameOne')}
        />
      </View>
    );
  }
}

const IndexNavigation = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
});

export default function Index() {
  return <IndexNavigation />;
}
