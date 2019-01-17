/** @format */

import { Navigation } from 'react-native-navigation';
import App from './App';

import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import RoomList from './screens/RoomList';
import RoomApp from './src/RoomApp';
// AppRegistry.registerComponent('appName', () => App);
Navigation.registerComponent(`Welcome`, () => Welcome);
Navigation.registerComponent(`SignIn`, () => SignIn);
Navigation.registerComponent(`SignUp`, () => SignUp);
Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`RoomList`, () => RoomList);
Navigation.registerComponent('RoomApp', () => RoomApp);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Welcome',
              options: {
                topBar: {
                  title: {
                    text: 'Welcome',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
