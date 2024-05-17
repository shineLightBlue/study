import { useMemo, useState, memo, createContext, useCallback, useContext, useReducer, useRef } from 'react';
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
  let ref = useRef(0)
  function handleClick() {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }
  return (
    <button onClick={handleClick}>点击!</button>

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
