/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootNavigator from './app/navigator/RootNavigator';

AppRegistry.registerComponent(appName, () => RootNavigator);
