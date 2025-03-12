import React from 'react'
import { Button, KeyboardAvoidingView, TextInput, View, StyleSheet } from 'react-native'

export default class AddContactForm extends React.Component {
    state = {
        name: "",
        phone: "",
        isFormValid: false,
    }

    getHandler = (key: any) => (val: any) => {
        this.setState({[key]: val})
    }

    handleNameChange = this.getHandler('name')
    handlePhoneChange = this.getHandler('phone')

    // handlePhoneChange = (phone: string) => {
    //     if (+phone >= 0 && phone.length <= 10) {
    //         this.setState({phone}, this.validateForm)
    //     }
    // }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length == 10 && this.state.name.length >= 3){
            this.setState({isFormValid: true})
        } else {
            this.setState({isFormValid: false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit({...this.state})
    }
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={style.container}>
                <TextInput placeholder='Name' style={style.input} onChangeText={this.getHandler('name')} value={this.state.name} />
                <TextInput placeholder='Number' style={style.input} keyboardType='numeric' onChangeText={this.getHandler('phone')} value={this.state.phone} />
                <View style={{marginTop: 5}}>
                    <Button title='Add' onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center'
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        outline: 'none',
        margin: 2
    }
})
