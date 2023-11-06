import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect
} from "react-router-dom";


import Root from '../views'
import Contact from '../views/contact'
import Project from '../views/project'
import ErrorPage from '../views/errorPage'


// 1、JSX 形式
export const routerJsx = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/project/:name/:age"
        element={<Project />}
      />
    </Route>
  )
) 


// 2、对象形式
export const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    index: true, // 加载默认模块
    caseSensitive: true, // 是否匹配大小写
    children: [
      {
        path: "contact/*",
        element: <Contact />,
        // 渲染之前加载数据
        loader: ({params, request})=>{
          fetch("/api/dashboard.json", {
            signal: request?.signal,
          })
          return {};
        },
        // 提交表单时触发、 redirect 路径 
        action: ({params, request})=>{
          console.log('重定向');
          return redirect('/project/lisi/16')
        }
      },
      {
        // projects/:projectId/tasks/:taskId
        path: "project/:name/:age",
        element: <Project />,
        loader: ({params, request})=>{
          console.log('获取 namge、age参数');
          return params;
        },
        action: ({params, request})=>params
      }
    ],
  },
  {
    path: "login",
    element: <div>login</div>,
  },
]);



// 3、组件形式
const routes = ()=>{
  return (
    // 根组建
    <Route path="/" element={<Root />}>
      {/* 使用 '*' 允许子组件直接使用 Routes-Route 进行嵌套子路由 */}
      <Route path="contact/*" element={<Contact />} />
      <Route path="project/:name/:age" element={<Project />}
      />
    </Route>
  )
}
export default routes;

