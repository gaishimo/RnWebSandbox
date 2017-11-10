import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('RnWebSandbox', () => App);
AppRegistry.runApplication('RnWebSandbox', { rootTag: document.getElementById('react-root') })
