import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Api = () => {
    const [personaje, setPersonaje] = useState([])
    useEffect(() =>{

        getMorty()
    })
    const getMorty = () => {
        let name= document.querySelector("input").value

        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character/?name='+name,
            
          })
            .then(function (response) {
                setPersonaje(response.data.results)
              console.log(response)
            });
    }

  return (

 
    <div className='name'>

        <div>
            <input id='selector' type="text" onChange={getMorty}/>
        </div>
        <div className='name'>
            {personaje.map(item =>(
            <div id='card'> 
                <h1 id='nombre'>{item.name}</h1>
                <img src={item.image}alt ="" />
                <h2 id='estado'>{item.status} </h2>
                <h2 id='estado'>{item.species} </h2>
                <h2 id='estado'>{item.gender} </h2>
        </div>
        ))}
      
        </div>

    </div>
  )
}
