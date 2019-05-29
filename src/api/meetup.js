import { http } from './client';

export const geUpcomingMeetupsRequest = async () => {
  return await http.get(`/meetups/upcoming`);
};

export const getAllMeetupsRequest = async () => {
  return await http.get(`/meetups`);
};
