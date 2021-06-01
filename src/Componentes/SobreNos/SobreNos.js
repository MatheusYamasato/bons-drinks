import React from 'react'
import style from './SobreNos.module.css'
import image from '../../imgs/about-pic.jpg'

const SobreNos = () =>  {
    return (
        <main>
            <div>
                <h1 className={style.titulo}>Sobre Nós</h1>
            </div>
            <section className={style.container}>
                <div className={style.itemA}>
                    <img src={image} alt="Bebida de Imagens"/>
                </div>
                <div className={style.itemB}>
                    <p className={style.sobre}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    
                    </p>
                </div>
            </section>
        </main>
    )
}

export default SobreNos