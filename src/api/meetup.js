import { http } from './client';

export const getUpcomingMeetupsRequest = async () => {
  return await http.get(`/meetups/upcoming`);
};

export const getAllMeetupsRequest = async () => {
  return await http.get(`/meetups`);
};

export const getSingleMeetupRequest = async meetupId => {
  return await http.get(`/meetups/${meetupId}`);
};

export const createMeetupRequest = async credentials => {
  return await http.post('/meetups', credentials);
};

export const editMeetupRequest = async (credentials, meetupId) => {
  return await http.patch(`/meetups/${meetupId}`, credentials);
};

export const deleteMeetupRequest = async meetupId => {
  return await http.delete(`/meetups/${meetupId}`);
};
