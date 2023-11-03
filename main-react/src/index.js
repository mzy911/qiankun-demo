import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Routes,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes, {
  router,
  routerJsx,
  routerObj
} from './routers'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 1、结合 createBrowserRouter 使用
  <RouterProvider router={routerObj}></RouterProvider>  

  // 2、直接返回 route
  // <BrowserRouter>
  //   <Routes>{routes()}</Routes>
  // </BrowserRouter>
);