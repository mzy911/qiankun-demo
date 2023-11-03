import React from "react";
import {
  Route,
  Routes,
  Outlet,
  Link
} from "react-router-dom";

const Contact = ()=>{
  return (
    <div>
      <Link to='/contact/aaaa'>跳转</Link>

      <Routes>
        <Route
          path="aaaa"
          element={'aaa'}
        />
      </Routes>
    </div>  
  )
}

export default Contact;