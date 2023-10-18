import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      Oops !!! Requested Page Not Found!
      <h1>
        {" "}
        {err.status}: {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
