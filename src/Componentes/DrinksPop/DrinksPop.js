import React, {useState, useEffect} from "react";
import style from './DrinksPop.module.css'

const DrinksPop = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        async function buscaInfo(){
            const dados = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail")).json();
            setDrinks(dados.drinks);
           }
           buscaInfo();
           
         }, []);

    return (
        <>
            <h1> As bebidas mais populares de cocktails </h1>
            <div className={style.container}>
            {drinks.slice(0, 10).map((drink) => (
                <div className={style.divPai}>
                <img className={style.img} src={drink.strDrinkThumb} alt="drink"/>
                <p>{drink.strDrink}</p>
                </div>
            ))}
      
        </div>
        </>
    );
};

export default DrinksPop;
