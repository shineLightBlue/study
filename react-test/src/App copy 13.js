import { useMemo, useState, memo, createContext, useContext, useReducer } from 'react';
import './App.css';
import { Route, Routes, Outlet, Link, useNavigate, useParams, useSearchParams, useLocation, useOutlet } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about/:userId" element={<About></About>}></Route>
        </Route>
      </Routes>
    </>
  );
}

function About() {
  const params = useParams()
  console.log(params)
  const location = useLocation()
  console.log(location)
  const p = new URLSearchParams(location.search)
  console.log(p)
  console.log(p.get('name'))
  console.log(p.get('active'))
  let [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)
  return (
    <div>About</div>
  )
}
const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }]
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
let nextId = 3
function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext)
  return (
    <>
      <input placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        setText('')
        dispatch({
          type: 'added',
          id: nextId++,
          text: text
        })
      }}>Add</button>
    </>
  )
}
function TaskList() {
  const tasks = useContext(TasksContext)
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task}></Task>
        </li>
      ))}
    </ul>
  )
}
function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useContext(TasksDispatchContext)
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              text: e.target.value
            }
          })
        }} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input type="checkbox" checked={task.done} onChange={e => {
        dispatch({
          type: 'changed',
          task: {
            ...task,
            done: e.target.checked
          }
        })
      }} />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        })
      }}>Delete</button>
    </label>
  )
}
function Home() {
  return (
    <TasksProvider>
      <AddTask></AddTask>
      <TaskList></TaskList>
    </TasksProvider>

  )
}

function Layout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
