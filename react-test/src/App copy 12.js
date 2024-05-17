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
const CurrentUserContext = createContext(null)
function Home() {
  const [theme, setTheme] = useState('light')
  return (
    <MyProviders>
      <WelcomePanel theme={theme} setTheme={setTheme} />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </MyProviders>

  )
}
function MyProviders({ children, theme }) {
  console.log(children)
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}
function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  )
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <p>You logged in as {currentUser.name}</p>
  )
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const canLogin = firstName !== '' && lastName !== ''
  return (
    <>
      <label>
        First name :
        <input required value={firstName} onChange={e => setFirstName(e.target.value)}></input>
      </label>
      <label>
        Last name :
        <input required value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <Button disabled={!canLogin} onClick={() => {
        setCurrentUser({
          name: firstName + " " + lastName
        })
      }}>
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields</i>}
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
function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
