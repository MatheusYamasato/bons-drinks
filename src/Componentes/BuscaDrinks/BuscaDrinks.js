import React, { useState } from 'react'
import {useFetch} from '../../hooks/useFetch'
import style from './BuscaDrinks.module.css'

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
        <div className={style.container}>
            <label></label>
            <input onChange={GetValor}></input>
            <button onClick={Search}>Buscar</button>
            <img className={style.img} src={drinks.strDrinkThumb}/>
            <p>{drinks.strDrink}</p>
        </div>
    )
    
}

export default BuscaDrinks
