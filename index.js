/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // Import this at the top of your entry file

AppRegistry.registerComponent(appName, () => App);
