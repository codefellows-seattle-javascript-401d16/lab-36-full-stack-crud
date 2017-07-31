import React from 'react';
import {provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
// import appStoreCreate from '../../lib/app-store-create.js';
import Dashboard from '../dashboard';

const store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider>
          <BrowserRouter>
            <main>
              <h1> Team APP </h1>
              <Route exact path='/' component={Dashboard} />
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
