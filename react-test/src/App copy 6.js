import { createContext, useContext, useState } from 'react';
import './App.css';
import { Route, Routes, Outlet, Link, useNavigate, useParams, useSearchParams, useLocation, useOutlet } from "react-router-dom";
const colorContext = createContext('pink')
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
  const [color, setColor] = useState(['blue', 'pink', 'yellow'])
  return (
    <colorContext.Provider value={color}>
      <div>
        <h1>我是Home组件</h1>
        <Node></Node>
      </div>
    </colorContext.Provider>

  )
}

function Node() {
  return (
    <div>
      Node
      <SubNode></SubNode>
    </div>
  )
}
function SubNode() {
  const color = useContext(colorContext)
  console.log(typeof color)
  console.log(color)
  return (
    <div>
      <ul>
        {color.map(color =>
          <li style={{ color }} key={color}>{color}</li>
        )}
      </ul>

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
