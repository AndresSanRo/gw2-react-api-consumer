import React, { FunctionComponent } from "react";
import { Input, Button } from "../../components";
import { useApiKey } from "./useApiKey";
const ApiKeyPage: FunctionComponent = (): JSX.Element => {
  const { apiKey, setApiKey, saveApiKey } = useApiKey();

  return (
    <>
      <h1>API key page</h1>
      <Input
        label={"API key"}
        required={true}
        onChangeValue={setApiKey}
        value={apiKey}
      />
      <Button text={"Enviar"} onClick={saveApiKey} />
    </>
  );
};

export default ApiKeyPage;
