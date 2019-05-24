import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};
