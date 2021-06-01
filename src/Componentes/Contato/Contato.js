import React from 'react'
import style from './Contato.module.css'
import image from '../../imgs/contact-pic.jpg'

const Form = () => {
    return (
        <>
        <h1 className={style.titulo}>Nos mande sua mensagem</h1>
        <main className={style.container}>
            <div className={style.contimg}> 
                <img src={image} alt="Bebida de Imagens" />
            </div>
            <div>
                <form className={style.formulario}>
                    <label>Nome:<input placeholder required/></label>
                    <label>Email<input placeholder required type="email"/></label>
                    <label className={style.labelText}>Digite sua mensagem abaixo
                    <textarea required className={style.textarea}></textarea></label> 
                    <button className={style.btn}>Enviar</button>
                </form>
            </div>
        </main>
        </>
    )
}

export default Form