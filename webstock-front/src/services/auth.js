export const TOKEN = "@webstock-Token";
export const USER_NAME = "@webstock-UserName";
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => localStorage.getItem(TOKEN);
export const getUserName = () => localStorage.getItem(USER_NAME);
export const setUserName = (user_name) => localStorage.setItem(USER_NAME, user_name);

export const login = (token, user_name) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(USER_NAME, user_name);
};

export const logout = () => {
  localStorage.clear();
};
