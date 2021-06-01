import React from 'react'
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'
import BuscaDrinks from '../BuscaDrinks/BuscaDrinks'
import DrinksPop from '../DrinksPop/DrinksPop'
import style from './Drinks.module.css'
import useFetch from '../../hooks/useFetch'

const Drinks = () =>  {

    const bebidas = useFetch()
        return (
            <div class={style.container}>
                
                <BrowserRouter> 
                <Link to="/drinks/drinkspop" className={style.link} >Populares</Link> 
                <Link to="/drinks/buscadrinks" className={style.link} >Buscar</Link>
                <Switch> 
                    <Route exact path="/drinks/drinkspop" component={DrinksPop} />  
                    <Route exact path="/drinks/buscadrinks" component={BuscaDrinks} />
                </Switch>
                    
                </BrowserRouter>
                <div> 
                
                    {bebidas.map(bebida => (
                        <ul>
                            <p>ID: {bebida.idDrink}</p>
                            <p>Nome: {bebida.strDrink}</p>
                            <img src={bebida.strDrinkThumb} alt="Drink" />
                        </ul>
                    ))}
                </div>
            </div>
        )
}

export default Drinks