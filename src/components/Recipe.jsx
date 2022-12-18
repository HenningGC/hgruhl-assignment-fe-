
import React, { useEffect, useState } from 'react'

export const Recipe = () => {
    const [data, setData] = useState([{}])

    useEffect(() => {
      fetch("/:id").then(
        res => res.json()
        ).then(
          data => { 
            setData(data) 
          }
        )
    },[])
    return (
    
      <div>
        {(typeof data.recipes === "undefined") ? (
    
          <p>Loading...</p>
    
        ) : (
          data.recipes.map((recipe, i) => (
            <p key={i}>{recipe}</p>
          )
    
        ))}
      </div>
    )
}
