import { Box } from '@mantine/core'
import useSWR from 'swr'
import './App.css'

const PORT = 4000;
export const ENDPOINT = `http://localhost:${PORT}`;

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then(response => response.json()) 

function App() {

  const { data, mutate } = useSWR("api/todos", fetcher);
 
  return (
    <h1>{JSON.stringify(data)}</h1>
  )
}

export default App
