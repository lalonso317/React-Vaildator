import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Fill from './Form'
import Submit from './Complete'
import '../styles/style.css'
import '../styles/base.css'


function App(props) {
  return (
    <Router>
   <Route exact path="/" component= {Fill} />
   <Route path="/Complete/" component={Submit}/>
   </Router>
  )
}

export default App
