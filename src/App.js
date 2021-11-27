// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { ThemeContext } from './components/context/createContext';
import { Main } from "./components/Main";

function App() {
  
  const [productos, setproductos] = useState(JSON.parse(localStorage.getItem("productos")) || [])

  const handleAddTarea = (tarea)=>{

    setproductos( [...productos, tarea])
   
  }

  useEffect(()=>{
    localStorage.setItem("productos", JSON.stringify(productos))
  }, [productos])

  const handleDeleteTarea = (id)=>{
    setproductos( productos.filter(producto=> producto.id !== id))
  }

  return (
    <ThemeContext.Provider value={{
      productos,
      setproductos,
      handleAddTarea,
      handleDeleteTarea
    }}>
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
