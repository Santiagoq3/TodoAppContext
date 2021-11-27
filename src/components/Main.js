import React, { useContext } from 'react'
import { ThemeContext } from './context/createContext'
import { TodoApp } from './TodoApp'
import { TodoList } from './TodoList'

export const Main = () => {
    let {productos, setproductos} = useContext(ThemeContext)
    console.log(productos)
    return (
        <div>
          <h1>Todo App con context.API</h1>
          <TodoApp />
          <TodoList />
        </div>
    )
}
