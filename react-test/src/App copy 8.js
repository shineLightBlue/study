import { createContext, useContext, useEffect, useReducer, useState } from 'react';
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

function Home() {
  const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false }
  ]
  let nextId = 3
  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ]
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t
          }
        })
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id)
      }
      default: {
        throw Error('未知action: ' + action.type)
      }
    }
  }
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  console.log(tasks,'tasks')
  // const [tasks, setTasks] = useState(initialTasks)
  function handleAddTask(text) {
    // setTasks([
    //   ...tasks, {
    //     id: nextId++,
    //     text: text,
    //     done: false
    //   }
    // ])
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }
  function handleChangeTask(task) {
    // setTasks(tasks.map((t) => {
    //   if (t.id === task.id) {
    //     return task
    //   } else {
    //     return t
    //   }
    // }))
    dispatch({
      type: 'changed',
      task: task
    })
  }
  function handleDeleteTask(taskId) {
    // setTasks(tasks.filter((t) => t.id !== taskId))
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }
  return (
    <>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask}></AddTask>
      <TaskList tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}>
      </TaskList>
    </>
  )
}

function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <>
      <input placeholder='添加任务' value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => {
        setText('')
        onAddTask(text)
      }}>添加</button>
    </>
  )
}
function Layout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}></Task>
        </li>
      ))}
    </ul>
  )
}
function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            })
          }} />
        <button onClick={() => setIsEditing(false)}>保存</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>编辑</button>
      </>
    )
  }
  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e) => {
        onChange({
          ...task,
          done: e.target.checked
        })
      }} />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </>
  )
}
export default App;
