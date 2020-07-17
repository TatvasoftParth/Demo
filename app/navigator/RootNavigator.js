import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../component/HomeScreen';
import AsteroidHomeScreenContainer from '../container/AesteroidHomeScreenContainer';
import AsteroidDetailScreen from '../component/AsteroidProject/AsteroidDetailScreen';
import CountryHomeScreenContainer from '../container/CountryHomeScreenContainer';
import CountryDetailScreenContainer from '../container/CountryDetailScreenContainer';

const Stack = createStackNavigator();

class RootNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="HomeScreen">
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{ title: 'Home' }}
                            />
                            <Stack.Screen
                                name="AsteroidHomeScreen"
                                component={AsteroidHomeScreenContainer}
                                options={{ title: 'Asteroid' }}
                            />
                            <Stack.Screen
                                name="AsteroidDetailScreen"
                                component={AsteroidDetailScreen}
                                options={{ title: 'Asteroid Details' }}
                            />
                            <Stack.Screen
                                name="CountryHomeScreen"
                                component={CountryHomeScreenContainer}
                                options={{ title: 'Country' }}
                            />
                            <Stack.Screen
                                name="CountryDetailScreen"
                                component={CountryDetailScreenContainer}
                                options={{ title: 'Country Details' }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

export default RootNavigator;
