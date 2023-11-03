import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = ()=>{
  return (
    <div>
      <Link to='/'>Home</Link>
      <span>&nbsp;</span>
      <Link to='/contact'>Contact</Link>
      <span>&nbsp;</span>
      <Link to='/project'>Project</Link>


      {/* 插入子模块 */}
      <Outlet></Outlet>
    </div> 
  )
}

export default Root;