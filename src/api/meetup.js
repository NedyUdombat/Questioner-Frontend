import { http } from './client';

export const geUpcomingMeetupsRequest = async () => {
  return await http.get(`/meetups/upcoming`);
};

export const getAllMeetupsRequest = async () => {
  return await http.get(`/meetups`);
};

export const createMeetupRequest = async credentials => {
  return await http.post('/meetups', credentials);
};

export const editMeetupRequest = async credentials => {
  return await http.patch('/meetups', credentials);
};

export const deleteMeetupRequest = async meetupId => {
  return await http.delete(`/meetups/${meetupId}`);
};
