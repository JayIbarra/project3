import config from "./config";

const TOKEN_LOCAL_KEY = config.TOKEN_LOCAL_KEY;

export const local_token_set = async (token) => {
  await window.localStorage.setItem(TOKEN_LOCAL_KEY, token); // write to local storage
  return token;
};

export const local_token_get = async () => {
  const token = await window.localStorage.getItem(TOKEN_LOCAL_KEY); // write to local storage
  return token;
};