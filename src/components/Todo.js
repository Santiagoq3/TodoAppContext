import React, { useContext } from 'react'
import { ThemeContext } from './context/createContext'
import "./todo.css"
export const Todo = () => {
    const {productos,handleDeleteTarea} = useContext(ThemeContext)

    return (
        <li>
            {
                productos.map(item=>{
                return <p key={item}>{item.tarea}
                        <button onClick={()=>{handleDeleteTarea(item.id)}}>
                            X   
                        </button>
                </p> 
            })}
            
        </li>
    )
}
