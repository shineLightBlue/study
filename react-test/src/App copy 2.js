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
  const [list, setList] = useState([
    {
      id: 1,
      name: '超级好吃的棒棒糖',
      price: 18.8,
      info: '开业大酬宾，全场8折'
    },
    {
      id: 2,
      name: '超级好吃的大鸡腿',
      price: 34.2,
      info: '开业大酬宾，全场8折'
    },
    {
      id: 3,
      name: '超级无敌的冰激凌',
      price: 14.2,
      info: '开业大酬宾，全场8折'
    }
  ])
  return (
    <div>
      {list.map(item => (
        <Child key={item.id} {...item}></Child>
      ))}
    </div>
  )
}
function Child(props) {
  console.log(props)
  return (
    <div>
      <h3>标题:{props.name}</h3>
      <div>价格:{props.price}</div>
      <div>{props.info}</div>
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
