import { useState } from "react";

export const useApiKey = (): {
  apiKey: string;
  setApiKey: (value: string) => void;
  saveApiKey: () => void;
} => {
  const [apiKey, setApiKey] = useState<string>(
    localStorage.getItem("gw2ApiKey")
  );

  const saveApiKey = () => {
    localStorage.setItem("gw2ApiKey", apiKey);
  };
  return { apiKey, setApiKey, saveApiKey };
};
