import React from "react";

import {
  useMatch
} from "react-router-dom";

const Project = ()=>{

  const match = useMatch('/project/:name/:age');

  console.log('match',match);
  return (
    <div>
      project
    </div>
  )
}

export default Project;