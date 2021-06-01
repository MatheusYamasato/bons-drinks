import "./App.css"
import React from 'react'
import Contato from './Componentes/Contato/Contato'
import Header from './Componentes/Header/Header'
import Drinks from './Componentes/Drinks/Drinks'
import Home from './Componentes/Home/Home'
import SobreNos from './Componentes/SobreNos/SobreNos'
import NossoTime from './Componentes/NossoTime/NossoTime'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contato' component={Contato} />
        <Route exact path='/drinks' component={Drinks} />
        <Route exact path='/sobrenos' component={SobreNos} />
        <Route exact path='/nossotime' component={NossoTime} />
      </Switch>
      </BrowserRouter>
    )
}
export default App;
