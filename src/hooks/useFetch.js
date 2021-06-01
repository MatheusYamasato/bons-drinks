import { useEffect, useState } from 'react'

const useFetch = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const buscarInfo = async () => {
            const dados = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const resposta = await dados.json()
            setDrinks(resposta.drinks)
        }
        buscarInfo()
    }, [])
    return drinks
}

export default useFetch