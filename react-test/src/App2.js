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
  return (
    <div>
      <NavBar>标题</NavBar>
      <br />
      <NavBar>商品</NavBar>
      <br />
      <NavBar>
        <span style={{ color: 'red' }}>花哨的标题</span>
      </NavBar>
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
function NavBar(props) {
  console.log(props)
  return (
    <>
      {props.children}
    </>
  )
}
export default App;
