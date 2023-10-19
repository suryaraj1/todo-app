import { Box } from '@mantine/core'
import useSWR from 'swr'
import './App.css'
import { MantineProvider } from '@mantine/core'
import AddTodo from "./components/AddTodo"

const PORT = 4000;
export const ENDPOINT = `http://localhost:${PORT}`;

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then(response => response.json()) 

function App() {

  // const { data, mutate } = useSWR("api/todos", fetcher);
 
  return (
    <MantineProvider>
      <AddTodo />
    </MantineProvider>
  )
}

export default App
