// /** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/** @format */

import { Navigation } from 'react-native-navigation';
import App from './App';

import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
// AppRegistry.registerComponent('appName', () => App);
Navigation.registerComponent(`Welcome`, () => Welcome);
Navigation.registerComponent(`SignIn`, () => SignIn);
Navigation.registerComponent(`SignUp`, () => SignUp);
Navigation.registerComponent(`App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'App',
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
