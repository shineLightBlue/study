import { useMemo, useState, memo } from 'react';
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
  console.log(p.get('age'))
  let [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)
  console.log(searchParams.get('name'))
  console.log(searchParams.get('age'))
  return (
    <div>About</div>
  )
}
const todos = createTodos()
function Home() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('all')
  const [isDark, setIsDark] = useState(false)
  const [id,setId] = useState(3)
  return (
    <>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('active')}>Active</button>
      <button onClick={() => setTab('completed')}>Completed</button>
      <button onClick={() => navigate('/about/'+id+'?name=abc&age=100', { state: { name: 'jack', age: 20,obj:{
        name:'tom',
        own:['car','plane']
      } } })}>goAbout</button>
      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'}></TodoList>
    </>
  )
}

function createTodos() {
  console.log('createTodos')
  const todos = []
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5
    })
  }
  return todos
}

function TodoList({ todos, tab, theme }) {
  console.log(todos, tab)
  // const visibleTodos = filterTodos(todos, tab)
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
  return (
    <div className={theme}>
      {/* <div> */}
      {/* <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul> */}
      <List items={visibleTodos}></List>
    </div>
  )
}
const List = memo(
  function List({ items }) {
    console.log(items, 'List渲染')
    return (
      <ul>
        {items.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    )
  }
)

function filterTodos(todos, tab) {
  console.log('filterTodos')
  return todos.filter(todo => {
    if (tab === 'all') {
      return true
    } else if (tab === 'active') {
      return !todo.completed
    } else if (tab === 'completed') {
      return todo.completed
    }
  })
}
function Layout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
