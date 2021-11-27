import React, { useContext, useState } from 'react'
import { ThemeContext } from './context/createContext'

export const TodoApp = () => {

    const [InputValue, setInputValue] = useState("")
    const {productos, handleAddTarea} = useContext(ThemeContext)

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        let Todo = {
            tarea: InputValue,
            id: productos.length + 1
        }
        handleAddTarea(Todo)
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Ingresar tarea por hacer...." name={InputValue} value={InputValue} onChange={handleChange} />
            <button>Agregar</button>
        </form>
    )
}
