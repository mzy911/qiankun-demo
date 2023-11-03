import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
        path="/project"
        element={<Project />}
      />
    </Route>
  )
) 

export const lll = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/aaaa" element={<div>Nihao</div>}/>
  )
) 


// 2、对象形式
export const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact/*?",
        element: <Contact />,
        // // 使用 useParams、useLoaderData 在组件内获取参数
        // loader: params(),
        // // 使用 useMatch 在组件内获取参数
        // action: params(),
      },
      // projects/:projectId/tasks/:taskId
      {
        path: "/project",
        element: <Project />
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
    <>
    <Route path="/" element={<Root />}>
      <Route path="/contact/*?" element={<Contact />} />
      <Route
        path="/project"
        element={<Project />}
      />
    </Route>
    </>
  )
}
export default routes;

