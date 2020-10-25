import React, { FunctionComponent } from "react";
import { Input } from "../../components";

const ApiKeyPage: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h1>API key page</h1>
      <Input placeHolder={"HOLAAAA"} type={"text"} label={"HEY"} />
    </>
  );
};

export default ApiKeyPage;
