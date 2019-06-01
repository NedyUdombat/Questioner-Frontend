import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import Navbar from '../../components/presentational/Navbar/Navbar';
import './SingleMeetup.scss';
import Button from '../../components/presentational/Button/Button';
import { Icon, Modal, Dimmer, Loader } from 'semantic-ui-react';
import { DEFAULT_IMAGE_URL } from '../../utils/config';
import Questions from '../../components/presentational/Questions/Questions';

// actions
import { getSingleMeetup } from '../../store/modules/meetup';
import { getMeetupsQuestions, askQuestion } from '../../store/modules/question';

export class SingleMeetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getSingleMeetup(this.props.match.params.id);
    this.props.getMeetupsQuestions(this.props.match.params.id);
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { meetup, isLoading, questions } = this.props;
    return (
      <Fragment>
        <Navbar className="nav-dark" />

        {isLoading && (
          <Dimmer active>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        )}
        <div className="single-meetup-div">
          <div className="single-meetup-card">
            <div className="w-100">
              <div className="card-header">
                <div className="d-flex justify-content-center">
                  <img
                    src={meetup.image || DEFAULT_IMAGE_URL}
                    alt="Meetup Image"
                    className="meetup-image"
                  />
                </div>
                <div className="d-block">
                  <p className="f-24">{meetup.topic}</p>
                  <p>{meetup.organizer_name}</p>
                  <p className="text-blue date">
                    {moment(meetup.happening_on).format('DD MMMM YYYY')}
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex ">
                  <p className="d-flex">
                    <span className="text-blue">Location: </span>&nbsp;&nbsp;
                  </p>
                  <p>{meetup.location}</p>
                </div>
              </div>
              <div className="card-footer ">
                <Modal
                  trigger={
                    <Button type="button" className="btn-transparent border-0">
                      <Icon name="plus" color="grey" size="big" />
                      {/*<span className="tooltiptext">Click here to ask</span>*/}
                    </Button>
                  }
                  closeIcon
                  size="tiny"
                >
                  <Modal.Header>What would you like to Ask?</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <form
                        onSubmit={this.submitHandler}
                        autoComplete="on"
                        data-name="create"
                      >
                        {/*{isLoading && (*/}
                        {/*  <Dimmer active>*/}
                        {/*    <Loader size="large">Loading</Loader>*/}
                        {/*  </Dimmer>*/}
                        {/*)}*/}
                        <div className="input-div d-flex justify-content-center">
                          <textarea
                            style={{
                              width: '100%',
                              border: '.0625rem solid #c4c4c4',
                            }}
                            onChange={this.onChange}
                            rows="5"
                            maxLength="300"
                            value={this.state.body}
                            placeholder="Type your Question here (300 characters max)"
                            name="body"
                            required="required"
                          />
                        </div>
                      </form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button className="btn-dark" type="submit">
                      <Icon name="checkmark" size="big" />
                    </Button>
                  </Modal.Actions>
                </Modal>

                <Button type="button" className="btn-transparent border-0">
                  <Icon name="calendar check outline" color="grey" size="big" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-grey">
          ---------- Questions ({questions.length}) ----------
        </p>
        {questions.length === 0 ? (
          <p>No Questions asked so far</p>
        ) : (
          questions.map(question => (
            <Questions question={question} key={question.id} />
          ))
        )}
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  meetup: state.meetups.meetup,
  isLoading: state.meetups.isLoading,
  questions: state.questions.questions,
  isQuestionLoading: state.questions.isLoading,
});

export default connect(
  mapStateToProps,
  { getSingleMeetup, getMeetupsQuestions, askQuestion },
)(SingleMeetup);

SingleMeetup.propTypes = {
  getMeetupsQuestions: PropTypes.func.isRequired,
  getSingleMeetup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  match: PropTypes.object.isRequired,
  meetup: PropTypes.object.isRequired,
  questions: PropTypes.array,
};
