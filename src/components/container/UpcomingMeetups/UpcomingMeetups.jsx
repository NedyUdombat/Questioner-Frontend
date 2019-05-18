import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// actions
import { getUpcomingMeetups } from '../../../store/modules/meetup';

// config
import { DEFAULT_IMAGE_URL } from '../../../utils/config';

// components
import Image from '../../presentational/Image/Image';

// styles
import './UpcomingMeetups.scss';

export class UpcomingMeetups extends React.Component {
  componentDidMount() {
    this.props.getUpcomingMeetups();
  }

  render() {
    const { meetups } = this.props;
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="title-tag">
            <p>Upcoming Meetups</p>
            <div className="d-flex justify-content-center">
              <div className="dash" />
            </div>
          </div>
        </div>
        <div className="section group">
          {meetups.length === 0 ? (
            <p>No Upcoming meetups</p>
          ) : (
            meetups.map(meetup => (
              <div className="col span_1_of_4" key={meetup.id}>
                <div className="d-flex justify-content-center">
                  <div className="product-card">
                    <a href="#">
                      <div className="card-image-top">
                        <Image
                          src={meetup.image || DEFAULT_IMAGE_URL}
                          alt="fr"
                          className="product-image"
                        />
                      </div>
                      <div className="product-card-details">
                        <p className="f-20 ">
                          <b>{meetup.topic}</b>
                        </p>
                        <div className="d-flex justify-content-between mt-1">
                          <small className="f-12">
                            <i>{meetup.organizer_name}</i>
                          </small>
                          <p className="text-blue">
                            {moment(meetup.happening_on).format('DD MMMM YYYY')}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

UpcomingMeetups.propTypes = {
  getUpcomingMeetups: PropTypes.func,
  meetups: PropTypes.array,
};
export const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
});

export default connect(
  mapStateToProps,
  { getUpcomingMeetups },
)(UpcomingMeetups);
