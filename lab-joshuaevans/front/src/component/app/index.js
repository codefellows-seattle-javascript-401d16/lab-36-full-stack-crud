import React from 'react'
import {Provider} from 'react-redux'
import appCreateStore from '../../lib/app-create-store.js'
import Dashboard from '../dashboard'
import {BrowserRouter, Route} from 'react-router-dom'

const store = appCreateStore()

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <Provider store={store}>
        <BrowserRouter>
          <main>
            <h3>What Band</h3>
            <Route exact path='/' component={Dashboard}/>
          </main>
        </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
