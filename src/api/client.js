import axios from 'axios';
import { getToken } from './helpers';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  baseURL: 'https://andela-questioner-app.herokuapp.com/api/v1',
  headers: { ...Authorization },
});
