import { useEffect, useState } from "react";
import { List } from "./components";
import { Button } from "./components";

function App() {
  const [data, setData] = useState<any[]>([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // comunicarnos con un endpoint
  // operacion async
  // parametros de entrada
  // context

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      
      if (!response.ok) {
        throw new Error("Error al obtener datos")
      }


      const jsonData = await response.json()
      setData(jsonData.results)

    } catch (err) {
      setError(err as string)

    } finally {
      setLoading(false)
    }
  }


  const nextCharacter = () => {
    setIndex((prev) => prev + 1 % data.length)
  }


  // useEffect es un metodo, que acepta otro metodo y acepta un array de dependenc.
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Personaje actual</h1>
      {data.length > 0 ? (
        <>
          <List personajeNombre={data[index]} />
          <Button label="Siguiente personaje" parentMethod={nextCharacter} />
        </>
      ) : (
        <p>Cargando personajes...</p>
      )}
    </>
  );

}

export default App;