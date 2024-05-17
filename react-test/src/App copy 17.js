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
  const [startTime,setStartTime] = useState(null)
  const [now,setNow] = useState(null)
  const intervalRef = useRef(null)
  function handleStart(){
    setStartTime(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(()=>{
      setNow(Date.now())
    },10)
  }
  function handleStop(){
    clearInterval(intervalRef.current)
  }
  let secondsPassed = 0
  if(startTime !=null && now !=null){
    secondsPassed = (now-startTime)/1000
  }
  return (
    <>
      <h1>Time passed:{secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
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


export default App;
