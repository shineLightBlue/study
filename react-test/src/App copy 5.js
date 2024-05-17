import { useState } from 'react';
import './App.css';
import { Route, Routes, Outlet, Link, useNavigate, useParams, useSearchParams, useLocation, useOutlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </>
  );
}
function About() {
  return (
    <div>About</div>
  )
}
function Home() {
  const [msg, setMsg] = useState('')
  const changeMsg = msg => {
    setMsg(msg)
  }
  return (
    <div>
      <h1>我是App组件</h1>
      <Jack changeMsg={changeMsg}></Jack>
      <Rose msg={msg}></Rose>
    </div>
  )
}

function Jack({ changeMsg }) {
  return (
    <div>
      <h3>我是Jack组件</h3>
      <button onClick={() => changeMsg('你跳')}>说</button>
    </div>
  )
}
function Rose({ msg }) {
  return (
    <div>
      <h3>我是Rose组件-{msg}</h3>
    </div>
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
