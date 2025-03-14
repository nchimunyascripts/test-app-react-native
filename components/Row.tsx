import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    row: {
        paddingTop: 20
    }
})

const Row = (props: any) => (
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

export default Row;