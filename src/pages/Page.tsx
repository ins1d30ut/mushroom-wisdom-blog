import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

interface Todo {
  id: number
  title: string
  // Add other todo fields as needed
}

function Page() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}

export default Page 