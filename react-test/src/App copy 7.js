import { createContext, useContext, useEffect, useState } from 'react';
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
function Count() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    console.log('count', count)
    document.title = `点击了${count}次`
  }, [])
  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={handleClick}>+1</button>
      <hr />
      <div>{loading ? '加载中' : '加载完成！！！'}</div>
      <button onClick={() => setLoading(!loading)}>切换loading</button>
    </div>
  )
}
function Home() {
  return (
    <Count></Count>
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
