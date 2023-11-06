import React from "react";
import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import Part1 from "./component/Part1";
import Part2 from "./component/Part2";

const Contact = ()=>{
  return (
    <div>
      <Link to='/contact/part1'>part1</Link>
      <Link to='/contact/part2'>part2</Link>

      <Routes>
        {/* 进入 contact 页面时，默认加载 part1 模块 */}
        <Route index element={ <Part1/>}/> 

        {/* 1、contact 下的两个子模块 */}
        {/* 2、path 路径是相对父路径进行拼接的 */}
        <Route path="part1" element={ <Part1/>}/>
        <Route path="part2" element={ <Part2/>}/>
      </Routes>
    </div>  
  )
}

export default Contact;