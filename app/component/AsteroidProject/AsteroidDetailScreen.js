import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class AsteroidDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.item
        }
    }

    componentDidMount(){
        this.setState({
          data: this.props.route.params.item,
        })
      }

    render() {
        const {data} = this.state;
        if(data.name) {
        return (
            <View style={styles.container}>
                <Text style={styles.itemTextStyles}> Author - {data.name} </Text>
                <Text style={styles.itemTextStyles}> Created At - {data.orbital_data && data.orbital_data.first_observation_date} </Text>
                <Text style={styles.itemTextStyles}> Designation - {data.designation} </Text>
            </View>
        )
        }
        else{
            return(
                <View style={styles.container}>
                    <Text style={styles.itemTextStyles}> No Data Found </Text>
                </View>
            )
        }
    }
}
