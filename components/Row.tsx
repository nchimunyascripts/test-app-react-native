import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface RowTypes {
  name: string;
  phone: string;
  key?: any;
}

const Row = (props: RowTypes) => {
  return (
    <View style={styles.row}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
});
export default Row;
