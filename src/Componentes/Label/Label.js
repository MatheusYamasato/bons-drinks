import React from 'react'

const Label = () => {

    const [campo, setCampo] = React.useState('')

    const alterarCampo = (e) => {
        e.preventDefault()
        setCampo(campo)
    }

    return(
        <div>
            <label>
                <input placeholder="Insira seu texto aqui..."/>
            </label>
            <button onChange={alterarCampo}>Click me!</button> 
        </div>
    )
}

export default Label;