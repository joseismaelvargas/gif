import React from "react"

const Buscador=({onSubmit,valorInput,
    onChange})=>{//Asegurate de escribir en Camecasse
    return(
        <form className="from-buscador" onSubmit={onSubmit}  >
            <input value={valorInput} onChange={onChange}placeholder="Busca tu gif"/>
            <button onSubmit={onSubmit}className="buscar">Buscar</button>
        </form>

    )
}
export default Buscador 