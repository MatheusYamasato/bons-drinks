import React, {useEffect, useState} from 'react'
import {BrowserRouter as Routes, Route, Link, Switch} from 'react-router-dom'
import BuscaDrinks from '../BuscaDrinks/BuscaDrinks'
import DrinksPop from '../DrinksPop/DrinksPop'

const Drinks = () =>  {

    const minhaRef = React.useRef(null)

    const trocaDeCor = (e) => {
        minhaRef.current.style.color === 'black' ? minhaRef.current.style.color = 'red' : minhaRef.current.style.color = 'black'
    }

    // const trocaDeNovo = (e) => {
    //     minhaRef.current.style.color = 'red' ? 'black' : 'black'
    // }
  
    const [request, setRequest] = useState({})
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(data => data.drinks[0])
            .then(drink => setRequest(drink))
    }, [])

        return (
            <main>
                <Link to="/drinks/drinkspop"> Pop </Link> 
                <Link to="/drinks/buscadrinks">Buscar</Link>
                <Routes>
                    <Switch> 
                        <Route exact path="/drinks/drinkspop"element={<DrinksPop /> } /> 
                        <Route exact path="/drinks/buscadrinks" element={<BuscaDrinks /> } />
                    </Switch>
                </Routes>
                <ul>
                    <p ref={minhaRef} onMouseEnter={trocaDeCor}>ID: {request.idDrink}</p>
                    <p>Nome: {request.strDrink}</p>
                    <img src={request.strDrinkThumb} alt="Drink" />
                </ul>
            </main>
        )
}

export default Drinks;