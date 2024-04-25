import {useState} from 'react';

const SearchGif=()=>{
    
  const [valorInput, setCvalorImput] = useState("")
  const [giph,setghipf]=useState([]) //guardar en un array vacio
 const [seEstaCargando,setCArgar]=useState(true)
 

  const getGhif=async(busqueda)=>{
   const url=`https://api.giphy.com/v1/gifs/search?api_key=2QfcGdPzuG45qFUNhxQdU1VqUmfKTq4S&q=${busqueda}`//&q la sintaxis de api por defecto esta api se actualiza al escribir en el input
 
   const response=await fetch (url)  
   setCArgar(false)
   await new Promise (ressolve=>{
    setTimeout(()=>{
      ressolve(true)
    },1000)
   })
   const data=await response.json()
   console.log(response)
   console.log(data.data)
   return data.data
   
  }

 
 const onchange=(evento)=>{
    const valor=evento.target.value //VAlor del input
    setCvalorImput(valor)
  }

  const onsubmit= async(evento)=>{
    evento.preventDefault()
    const gifguardado= await getGhif(valorInput) //Buscador de ghipfy
    setghipf(gifguardado)
    console.log(giph)
   

  }
  // Devolver los valores como un objeto
    return {
        // retornamos las funciones
        onsubmit,
        onchange,
        giph,
        valorInput,
        seEstaCargando
        
    };

}
export default SearchGif