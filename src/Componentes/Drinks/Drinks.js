import React from 'react'
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'
import BuscaDrinks from '../BuscaDrinks/BuscaDrinks'
import DrinksPop from '../DrinksPop/DrinksPop'
import style from './Drinks.module.css'

const Drinks = () =>  {
        return (
            <main className={style.container}>
                <BrowserRouter>
                    <div> 
                        <Link to="/drinks/drinkspop" className={style.link}>Populares</Link> 
                    </div>
                    <div> 
                    <Link to="/drinks/buscadrinks" className={style.link}>Buscar</Link>
                    </div>
                    <Switch> 
                    <Route exact path="/drinks/drinkspop" component={DrinksPop} />  
                    <Route exact path="/drinks/buscadrinks" component={BuscaDrinks} />
                    </Switch> 
                </BrowserRouter>
            </main>
        )
}

export default Drinks