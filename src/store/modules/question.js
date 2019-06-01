import swal from '@sweetalert/with-react';

import {
  askQuestionRequest,
  getAllQuestionsForMeetupRequest,
} from '../../api/question';

export const ASK_QUESTION_PROCESS = 'ASK_QUESTION_PROCESS';
export const ASK_QUESTION_SUCCESS = 'ASK_QUESTION_SUCCESS';
export const ASK_QUESTION_ERROR = 'ASK_QUESTION_ERROR';
export const GET_MEETUPS_QUESTIONS_PROCESS = 'GET_MEETUPS_QUESTIONS_PROCESS';
export const GET_MEETUPS_QUESTIONS_SUCCESS = 'GET_MEETUPS_QUESTIONS_SUCCESS';
export const GET_MEETUPS_QUESTIONS_ERROR = 'GET_MEETUPS_QUESTIONS_ERROR';

export const askQuestionProcess = () => ({
  type: ASK_QUESTION_PROCESS,
});

export const askQuestionSuccess = questions => ({
  type: ASK_QUESTION_SUCCESS,
  questions,
});

export const askQuestionError = error => ({
  type: ASK_QUESTION_ERROR,
  error,
});

export const getMeetupsQuestionsProcess = () => ({
  type: GET_MEETUPS_QUESTIONS_PROCESS,
});

export const getMeetupsQuestionsSuccess = questions => ({
  type: GET_MEETUPS_QUESTIONS_SUCCESS,
  questions,
});

export const getMeetupsQuestionsError = error => ({
  type: GET_MEETUPS_QUESTIONS_ERROR,
  error,
});

export const askQuestion = (question, questions) => async dispatch => {
  try {
    dispatch(askQuestionProcess());
    await askQuestionRequest(question);
    questions.push(question);
    dispatch(askQuestionSuccess(questions));
    swal({
      title: 'Success!',
      icon: 'success',
      text: `Question successfully asked`,
    });
  } catch (error) {
    swal({
      title: 'Error!',
      icon: 'error',
      text: `${error.response.data.message}`,
      button: 'RETRY',
    });
    dispatch(askQuestionError(error.response.data));
  }
};

export const getMeetupsQuestions = id => async dispatch => {
  try {
    dispatch(getMeetupsQuestionsProcess());
    const { data } = await getAllQuestionsForMeetupRequest(id);
    dispatch(getMeetupsQuestionsSuccess(data.data));
  } catch (error) {
    dispatch(getMeetupsQuestionsError(error.response.data));
  }
};

export const DEFAULT_STATE = {
  questions: [],
  isLoading: false,
  error: {},
};

export const questionReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ASK_QUESTION_PROCESS:
    case GET_MEETUPS_QUESTIONS_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case ASK_QUESTION_SUCCESS:
    case GET_MEETUPS_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        isLoading: false,
      };
    case ASK_QUESTION_ERROR:
    case GET_MEETUPS_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
