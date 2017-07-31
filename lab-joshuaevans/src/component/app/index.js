import React from 'react'
import {BrowserRouter, Router} from 'react-router-dom'

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <main>
            <h1>some stufff</h1>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
