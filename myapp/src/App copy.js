// import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
function App() {
  // let content;
  // if (isLoggedIn) {
  //   content = <AdminPanel></AdminPanel>
  // } else {
  //   content = <LoginForm></LoginForm>
  // }
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
    // alert('You clicked me!')
  }
  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>)
  return (
    <div>
      <ul>
        {listItems}
      </ul>
      {/* {content} */}
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <Profile></Profile>
    </div>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height: user.imageSize }}></img>
    </>
  )
}
export default App;
