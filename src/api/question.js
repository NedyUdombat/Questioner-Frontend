import { http } from './client';

export const askQuestionRequest = async question => {
  return await http.post(`/questions`, question);
};

export const getAllQuestionsForMeetupRequest = async id => {
  return await http.get(`/${id}/questions`);
};
