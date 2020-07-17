import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles';

export default class CountryHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: "",
        }
    }

    async onSubmit() {
        await this.props.fetchCountryData({ payload: false, countryName: this.state.countryName });
        const countryData = this.props.countryData;
        console.log("countryData==>", countryData);
        this.props.navigation.navigate('CountryDetailScreen', { item: this.props.countryData })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        value={this.state.countryName}
                        onChangeText={(text) => { this.setState({ countryName: text }) }}
                        placeholder="Country Name"
                        placeholderTextColor="gray"
                        style={styles.textInputStyle}
                    />
                </View>
                <TouchableOpacity style={styles.btnStyes} onPress={() => this.onSubmit()}>
                    <Text style={styles.btnTextStyles}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
