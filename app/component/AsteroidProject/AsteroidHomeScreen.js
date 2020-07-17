import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'

export default class AsteroidHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroid_id: null,
        }
    }

    async generateAsteroidId() {
        await this.props.fetchAllAsteroidIds({ payload: false })
        const asteroidIds = this.props.asteroidIds;
        console.log("asteroidIds==>", asteroidIds);
        let id = asteroidIds.near_earth_objects[Math.floor(Math.random() * asteroidIds.near_earth_objects.length)].id;
        this.setState({ asteroid_id: id })
    }
    async getAsteroidDetails() {
        await this.props.fetchAsteroidDetails({payload: false, id: this.state.asteroid_id});
        const asteroidDetails = this.props.asteroidDetails;
        console.log("asteroidDetails==>", asteroidDetails);
        this.props.navigation.navigate("AsteroidDetailScreen", {item: asteroidDetails});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        value={this.state.asteroid_id}
                        onChangeText={(text) => { this.setState({ asteroid_id: text }) }}
                        placeholder="Asteroid Id"
                        placeholderTextColor="gray"
                        style={styles.textInputStyle}
                        keyboardType="number-pad"
                    />
                </View>
                <TouchableOpacity style={styles.btnStyes} onPress={() => this.getAsteroidDetails()}>
                    <Text style={styles.btnTextStyles}>Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyes} onPress={() => this.generateAsteroidId()}>
                    <Text style={styles.btnTextStyles}>Generate Asteroid Id</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
