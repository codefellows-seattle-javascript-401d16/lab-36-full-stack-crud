import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create';
import Dashboard from '../dashboard';

const store  = appStoreCreate();

class App extends React.Component {
  render() {
    console.log('*****', store);
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <main>
              <h1>This is a damn fine h1 herrrr</h1>
              <Route exact path='/' component={Dashboard} />
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
