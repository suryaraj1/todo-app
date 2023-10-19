import { Box } from '@mantine/core'
import useSWR from 'swr'
import './App.css'
import { MantineProvider, List } from '@mantine/core'
import AddTodo from "./components/AddTodo"

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

const PORT = 4000;
export const ENDPOINT = `http://localhost:${PORT}`;

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then(response => response.json()) 

function App() {

  const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);
 
  return (
    <MantineProvider>
      <List center>
        {data?.map((todo) => {
          return <List.Item key={`todo__${todo.id}`}>
              {todo.title}
          </List.Item>
        })}
      </List>
      <AddTodo mutate={mutate} />
    </MantineProvider>
  )
}

export default App
