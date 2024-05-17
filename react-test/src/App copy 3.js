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
  const [obj, setObj] = useState({
    money: 10000,
    car: '二手-奥拓'
  })
  const buyPhone = (price) => {
    setObj({
      ...obj,
      money: obj.money - price
    })
  }
  return (
    <div>
      <Child money={obj.money} car={obj.car} buyPhone={buyPhone}></Child>
    </div>
  )
}
function Child({ money, car, buyPhone }) {
  return (
    <div>
      我是子组件 - {money} - {car}
      <button onClick={() => buyPhone(200)}>买手机</button>
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
