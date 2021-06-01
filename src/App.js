// import logo from "./logo.svg";
import "./App.css"
import React from 'react'
import Form from './Componentes/Form/Form'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import Drinks from './Componentes/Drinks/Drinks'
import Contatos from './Componentes/Contatos/Contatos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/formulario' component={Form} />
        <Route exact path='/drinks' component={Drinks} />
        <Route exact path='/contato/*' component={Contatos} />
      </Switch>
      <Footer /> 
      </BrowserRouter>
    )
}
export default App;
