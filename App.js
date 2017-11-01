import React, {Component} from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import RouterM from './RouterM';
import reducer from './reducer';

const store = createStore(reducer);

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <RouterM />
      </Provider>
    );
  }
}

export default App;