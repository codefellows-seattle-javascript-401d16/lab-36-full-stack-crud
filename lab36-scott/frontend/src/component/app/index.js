import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Provider from 'react-redux';
import appStoreCreate from './lib/app-store-create.js';

let store = appStoreCreate();

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className='app'>
            Dingo
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
