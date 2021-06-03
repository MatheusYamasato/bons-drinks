import React from 'react'
import imagemUm from '../../imgs/imagemUm.jpeg'
import imagemDois from '../../imgs/imagemDois.jpg'
import imagemTres from '../../imgs/imagemTres.jpg'
import style from './NossoTime.module.css'

const NossoTime = () =>  {
    return (
        <main>
            <h1 className={style.titulo}>Nosso time é formado por:</h1> 
            <section className={style.container}>
                <div className={style.divPai}>
                    <img className={style.img1} src={imagemUm} alt="Imagem do primeiro integrante"/>
                    <h5 className={style}>MDY</h5>
                    <p className={style.paragrafo}>Colaborador dos bons drinks  desde sua fundação</p>  
                </div>
                <div className={style.divPai}>
                    <img className={style.img2} src={imagemDois} alt="Imagem do segundo integrante" />
                    <h5 className={style}>Matheus Dias</h5>
                    <p className={style.paragrafo}>Colaborador dos bons drinks  desde sua fundação</p>
                </div>
                <div className={style.divPai}>
                    <img className={style.img3} src={imagemTres} alt="Imagem do segundo integrante" />
                    <h5 className={style}>Matheus Yamasato</h5>
                    <p className={style.paragrafo}>Colaborador dos bons drinks  desde sua fundação</p>
                </div>
            </section>
        </main>
    )
}

export default NossoTime