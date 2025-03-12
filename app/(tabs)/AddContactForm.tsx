import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

export default class AddContactForm extends React.Component {
    state = {
        name: "",
        phone: ""
    }

    handleNameChange = (name: string) => {
        this.setState({name})
    }

    handlePhoneChange = (phone: string) => {
        this.setState({phone})
    }

    render(){
        return (
            <View style={style.container}>
                <TextInput style={style.input} onChangeText={this.handleNameChange} value={this.state.name} />
                <TextInput style={style.input} keyboardType='numeric' onChangeText={this.handlePhoneChange} value={this.state.phone} />
                <View style={{marginTop: 5}}>
                    <Button title='Add Contact' />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 2
    }
})
