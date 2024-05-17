import { useMemo, useState, memo, createContext, useCallback, useContext, useReducer } from 'react';
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
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />
        Dark mode
      </label>
      <hr />
      <ProductPage referrerId="wizard_of_oz" productId={123} theme={isDark ? 'dark' : 'light'}></ProductPage>
    </>

  )
}
function post(url, data) {
  console.log('POST /' + url)
  console.log(data)
}
function ProductPage({ productId, referrerId, theme }) {
  // const handleSubmit = useCallback(
  //   (orderDetails) => {
  //     console.log(orderDetails)
  //     post('/product/' + productId + 'buy', {
  //       referrerId,
  //       orderDetails
  //     })
  //   }, [productId, referrerId])
  function handleSubmit(orderDetails) {
    console.log(orderDetails)
    post('/product/' + productId + 'buy', {
      referrerId,
      orderDetails
    })
  }
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit}></ShippingForm>
    </div>
  )
}
// const ShippingForm =
// memo(
function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)
  function handleSubmit(e) {
    console.log(e)
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    }
    onSubmit(orderDetails)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of items:
        <button type='button' onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
// )

function Layout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
