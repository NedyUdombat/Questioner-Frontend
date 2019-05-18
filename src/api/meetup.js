import { http } from './client';

export const geUpcomingMeetupsRequest = async () => {
  return await http.get(`/meetups/upcoming`);
};
