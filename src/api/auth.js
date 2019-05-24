import { http } from './client';

export const registrationRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};
