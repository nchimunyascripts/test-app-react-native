import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// type RowProps = {
//     name: string;
//     phone: string;
// }

const styles = StyleSheet.create({
    row: {
        paddingTop: 20
    }
})

const Row: React.FC<RowProps> = props => (
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

export default Row;