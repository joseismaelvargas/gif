import { useState } from 'react'
import Buscador from './componentes/Buscador.jsx'
import  Gif  from './componentes/gif.jsx'
import searchgif from './componentes/customhook.js'
// import 'estilos.css'

// import './App.css'

function App() {
 const {onsubmit,onchange,valorInput,giph,seEstaCargando}=searchgif()
 
  return (
    <>
    <div className='app'>
     <h1 className='title'>App de Giff</h1>
     <Buscador
     onChange={onchange}
     onSubmit={onsubmit}
     valorInput={valorInput}/>

     
   
  
    
    </div>
  
      
  {
    seEstaCargando?(<h2>Cargandooo....</h2>) :( <Gif giph={giph}/> )//Operador ternario para la expresion cargando
    }
   
      
    </>
  )
}

export default App
