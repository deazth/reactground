import React from 'react';
import { StackNavigator } from 'react-navigation';

import IntroPage from './IntroPage';
import ModeSelect from './ModeSelect';


const RouterM = StackNavigator({
  IntroPage: { screen: IntroPage },
  ModeSelect: { screen: ModeSelect },
});

export default RouterM