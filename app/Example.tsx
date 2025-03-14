import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { Button, View } from 'react-native';

class ScreenComponentOne extends React.Component {
  render(): React.ReactNode {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}
      >
        <Button
          title="Go to the Second Screen"
          onPress={() => {
            this.props.navigation.navigate('RouteNameTwo');
          }}
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
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'yellow',
        }}
      >
        <Button
          title="Go to the First Screen"
          onPress={() => {
            this.props.navigation.navigate('RouteNameOne');
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
});

export default class Example extends React.Component {
  render(): React.ReactNode {
    return <AppNavigator />;
  }
}
