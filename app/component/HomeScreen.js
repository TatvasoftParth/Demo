import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toNavigate(stack) {
        this.props.navigation.navigate(stack);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnStyes} onPress={() => this.toNavigate("AsteroidHomeScreen")}>
                    <Text style={styles.btnTextStyles}>Asteroid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyes} onPress={() => this.toNavigate("CountryHomeScreen")}>
                    <Text style={styles.btnTextStyles}>Country</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyes}>
                    <Text style={styles.btnTextStyles}>List</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
