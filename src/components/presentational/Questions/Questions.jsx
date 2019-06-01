import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';

import Button from '../Button/Button';
import { DEFAULT_USER_IMAGE_URL } from '../../../utils/config';

const Questions = question => {
  console.log(question.question);
  return (
    <div className="question-card">
      <div className="card-header details">
        <div className="d-flex">
          <img
            src={DEFAULT_USER_IMAGE_URL}
            alt="Meetup Image"
            className="profile-image"
          />
          <div style={{ marginTop: '1rem' }}>
            {/*<p style={{ lineHeight: '0rem' }}> </p>*/}
            <p>@{question.question.users.firstname}</p>
          </div>
        </div>
        <div className="">
          <p className="f-14 text-grey time-posted">
            Asked : {moment(question.question.created_on, 'YYYYMMDD').fromNow()}
          </p>
        </div>
      </div>
      <div className="card-body question">
        <p>Question: {question.question.body}</p>
      </div>
      <div className="card-footer actions">
        <div className="w-45 inner-footer  h-100 d-flex justify-content-between align-items-center">
          <div className="d-flex  w-100 justify-content-center ">
            <Button type="button" className="btn-transparent border-0">
              <Icon name="thumbs up" color="blue" size="large" />
            </Button>
          </div>
          <div
            className="d-flex w-100 justify-content-center"
            style={{ margin: 'auto 1rem' }}
          >
            <span className="amount">2</span>
          </div>
          <div className="d-flex w-100 justify-content-center ">
            <Button type="button" className="btn-transparent border-0">
              <Icon name="thumbs down" color="red" size="large" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
