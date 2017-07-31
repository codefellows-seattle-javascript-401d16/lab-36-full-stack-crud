import React from 'react'
import {Provider} from 'react-redux'
import appCreateStore from '../../lib/app-create-store.js'
import Dashboard from '../dashboard'
import {BrowserRouter, Router} from 'react-router-dom'

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <main>
            <h3>What Band</h3>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
