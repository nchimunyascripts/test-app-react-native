import React from 'react';
import App from '@/app/App';
import { StyleSheet, View } from 'react-native';
export default function Index() {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
