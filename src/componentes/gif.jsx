import {animate, motion} from'framer-motion'


 const gif=({giph})=>{
  const variante={
  initial:{
    opacity:0,
    scale:0

  },
animate:{
  opacity:1,
  scale:1,
  transition:{
    duration:1
  }
}}
    return(
    <div className="container">
        {
            giph.map(element=>(//Giph es el array vacio 
              <> 
                 {/* <h3 key={element.id}>{element.title}</h3> */}
                 
                 < motion.img drag whileHover={{scale:1.6}} initial="initial"animate="animate" variants={variante} className="gif" key={element.id}  src={element.images.original.url}alt="" />
              </>
           
            
            ))
          } 
    </div>)
} 
export default gif 