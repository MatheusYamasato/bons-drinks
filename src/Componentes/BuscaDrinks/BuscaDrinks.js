import React, { useState } from 'react'
import {useFetch} from '../../hooks/useFetch'

const BuscaDrinks = () =>  {

    const [input, setInput] = useState('')
    const [drinks, setDrinks] = useState('')

    const GetValor = async (drink) => {
        setInput(drink.target.value)
    }

    const Search =  async () => {
        const dados = await useFetch(input)
        setDrinks(dados.drinks[0])
    }

    return (
        <div>
            <label></label>
            <input onChange={GetValor}></input>
            <button onClick={Search}>Buscar</button>
            <img src={drinks.strDrinkThumb}/>
        </div>
    )
    
}

export default BuscaDrinks
