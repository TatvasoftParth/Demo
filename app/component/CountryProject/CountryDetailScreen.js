import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CountryDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.item,
            weatherData: {}
        }
    }

    componentDidMount(){
        this.setState({
          data: this.props.route.params.item,
        })
      }

      async checkWeather() {
          await this.props.fetchWeatherData({ payload: false, countryName: this.state.data.name });
          const weatherData = this.props.weatherData;
          console.log("weatherData==>", weatherData);
          this.setState({ weatherData });

      }

    render() {
        const {data, weatherData} = this.state;
        if(data) {
        return (
            <View style={styles.container}>
                <Text style={styles.itemTextStyles}> Country - {data && data.name} </Text>
                <Text style={styles.itemTextStyles}> Alpha 2 Code - {data && data.alpha2Code} </Text>
                <Text style={styles.itemTextStyles}> Population - {data && data.population} </Text>
                {weatherData.current && <Text style={styles.itemTextStyles}> Temperature - {weatherData.current.temperature} </Text>}
                {weatherData.current && <Text style={styles.itemTextStyles}> Wind Speed - {weatherData.current.wind_speed} </Text>}
                {weatherData.current && <Text style={styles.itemTextStyles}> Wind Degree - {weatherData.current.wind_degree} </Text>}
                <View>
                    <TouchableOpacity style={styles.weatherBtnStyles} onPress={() => this.checkWeather()}>
                        <Text style={styles.btnTextStyles}>Check Weather</Text>
                    </TouchableOpacity>
                </View>
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
