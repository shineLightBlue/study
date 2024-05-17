import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ConfigProvider } from 'antd'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import A1 from './pages/A1'
import A2 from './pages/A2'
import A3 from './pages/A3'
import A4 from './pages/A4'
import A5 from './pages/A5'
import A7 from './pages/A7'
import A8Login from './pages/A8Login'
import MyRouter from './router/MyRouter';
import P1 from './pages/P1'
import P2 from './pages/P2'
import P3 from './pages/P3'
import P4 from './pages/P4'
import P5 from './pages/P5'
import P6 from './pages/P6'
import P7 from './pages/P7'
import P8 from './pages/P8'
import { Counter } from '../src/features/counter/Counter'
const container = document.getElementById('root')!;
const root = createRoot(container);
const stu1 = { id: 1, name: '风清扬', sex: '男', age: 99, photo: '../imgs/0.jpg' }
const stu2 = { id: 2, name: '玮哥', sex: '男', age: 20, photo: '/imgs/1.jpg' }
const stu3 = { id: 3, name: '长宏', sex: '男', age: 30, photo: '/imgs/2.jpg' }
root.render(
  // <>
  //   {/* <P1 student={stu1}></P1>
  // <Provider store={store}>
  //   <Counter></Counter>
  // </Provider>
  //   <P1 student={stu3}></P1> */}
  //   {/* <P2 students={[stu1, stu2, stu3]} hideAge={false}></P2> */}
  //   {/* <P3 id={2}></P3> */}
  //   {/* <P4 id={1}></P4> */}
  //   {/* <P5 id={1}></P5> */}
  //   {/* <P6 id={1} age={18}></P6> */}
  //   {/* <P7></P7> */}
  //   <P8></P8>
  // </>

   <ConfigProvider locale={zhCN}>
    <HashRouter>
       <Suspense fallback={<h3>加载中</h3>}>
         <MyRouter></MyRouter>
       </Suspense>
    </HashRouter>
   </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
