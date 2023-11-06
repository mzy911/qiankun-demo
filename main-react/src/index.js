import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Routes,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes, {
  routerJsx,
  routerObj
} from './routers'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 1、结合 createBrowserRouter 使用：routerJsx、routerObj
  <RouterProvider router={routerObj}></RouterProvider>  

  // 2、直接嵌套 route 结构
  // <BrowserRouter>
  //   <Routes>{routes()}</Routes>
  // </BrowserRouter>
);