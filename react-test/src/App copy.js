import { useMemo, useState, memo, createContext, useContext } from 'react';
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
const ThemeContext = createContext(null)
function Home() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input type="checkbox" checked={theme === 'dark'}
          onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }} />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = 'panel-' + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme
  return (
    <button className={className}>
      {children}
    </button>
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
