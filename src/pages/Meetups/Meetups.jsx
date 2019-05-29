import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/presentational/Navbar/Navbar';
import Image from '../../components/presentational/Image/Image';
import { DEFAULT_IMAGE_URL } from '../../utils/config';
import moment from 'moment';
import { getAllMeetups } from '../../store/modules/meetup';

export class Meetups extends React.Component {
  componentDidMount() {
    this.props.getAllMeetups();
  }

  render() {
    const { meetups } = this.props;
    return (
      <Fragment>
        <Navbar className="nav-dark" />
        <div className="section group">
          {meetups.length === 0 ? (
            <p>No meetups</p>
          ) : (
            meetups.map(meetup => (
              <div className="col span_1_of_4" key={meetup.id}>
                <div className="d-flex justify-content-center">
                  <div className="product-card">
                    <Link to="#">
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
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Fragment>
    );
  }
}

Meetups.propTypes = {
  getAllMeetups: PropTypes.func.isRequired,
  meetups: PropTypes.array.isRequired,
};

export const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
});

export default connect(
  mapStateToProps,
  { getAllMeetups },
)(Meetups);
