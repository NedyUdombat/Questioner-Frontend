import { http } from './client';

export const registrationRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};

export const authenticationRequest = async credentials => {
  return await http.post('/auth/login', credentials);
};
