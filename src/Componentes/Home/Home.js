import React from 'react'
import style from './Home.module.css'

const Home = () => {
    return (
        <main className={style.container}>
            <section className={style.section}>  
                <h1 className={style.text}>Bons Drinks</h1>
                <h3 className={style.text}>Aqui você encontra os melhores drinks</h3>
            </section>
        </main> 
    )
}

export default Home