import { useEffect, useState } from "react";
import { List } from "./components";
import { Button } from "./components";

function App() {
  const [data, setData] = useState<any[]>([])

  // comunicarnos con un endpoint
  // operacion async
  // parametros de entrada
  // context

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const jsonData = await response.json()
      setData(jsonData.results)

    } catch (err) {
      console.log(err)
    }
  }

  const changeName = () => {
    setData((prev) =>
      prev.map((p) =>
        p.id === 0 ? { ...p, name: "Nuevo Rick" } : p
      )
    );
  };


  // useEffect es un metodo, que acepta otro metodo y acepta un array de dependenc.
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Button 
      label={`Cambiar nombre`} 
      parentMethod={changeName} 
    
    />
      <List
        personajeNombre={data}
      />
    </>
  )
}

export default App;