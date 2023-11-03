import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <h1>Sorry, an unexpected error has occurred.</h1>
  )
}

export default ErrorPage;