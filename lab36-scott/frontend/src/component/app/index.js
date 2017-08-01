import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import appStoreCreate from '../../lib/app-store-create.js';

const store = appStoreCreate();

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div className='app'>
              Dingo
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
