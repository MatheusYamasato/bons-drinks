import React from 'react'
import style from './Form.module.css'

const Form = () => {
    return (
        <div>
            <form className={style.formulario}>
                <label> Nome:<input/></label>
                <label> Sobrenome:<input/></label>
                <label> Idade:<input/></label>
            </form>
        </div>
    )
}

export default Form