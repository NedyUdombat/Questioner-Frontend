import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/presentational/Navbar/Navbar';
import { DEFAULT_IMAGE_URL } from '../../utils/config';
import moment from 'moment';
import Button from '../../components/presentational/Button/Button';
import { Modal, Image, Dimmer, Loader } from 'semantic-ui-react';

// actions
import { getAllMeetups, createMeetup } from '../../store/modules/meetup';

import './Admin.scss';
import Input from '../../components/presentational/Input/Input';

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      organizerName: '',
      location: '',
      image: '',
      happeningOn: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getAllMeetups();
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  submitHandler = async event => {
    event.preventDefault();
    this.props.createMeetup(
      {
        ...this.state,
      },
      this.props.meetups,
    );

    this.setState({ ...this.state });
  };
  render() {
    const { meetups, isLoading } = this.props;

    return (
      <Fragment>
        <Navbar className="nav-dark" />
        <div
          className="d-flex justify-content-end"
          style={{
            padding: '3% 6%',
          }}
        >
          <Modal
            trigger={
              <Button
                type="button"
                className="btn-dark "
                style={{
                  width: 'fit-content',
                  padding: 'auto 5%',
                }}
              >
                Create Meetup
              </Button>
            }
            closeIcon
            size="tiny"
          >
            <Modal.Content>
              <div
                className="auth-card"
                style={{
                  paddingTop: '0',
                }}
              >
                <form onSubmit={this.submitHandler}>
                  {isLoading && (
                    <Dimmer active>
                      <Loader size="large">Loading</Loader>
                    </Dimmer>
                  )}
                  <div className="form-group">
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.organizerName}
                        placeholder="Organizer Name"
                        name="organizerName"
                        type="text"
                        required="required"
                      />
                    </div>
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.topic}
                        placeholder="Meetup Topic"
                        name="topic"
                        type="text"
                        required="required"
                      />
                    </div>
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.happeningOn}
                        name="happeningOn"
                        type="date"
                        required="required"
                      />
                    </div>
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.location}
                        placeholder="Location"
                        name="location"
                        type="text"
                        required="required"
                      />
                    </div>
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.tags}
                        placeholder="Tags"
                        name="tags"
                        type="text"
                      />
                    </div>
                    <div className="input-div d-flex justify-content-center">
                      <Input
                        onChange={this.onChange}
                        className="form-control-input"
                        value={this.state.image}
                        placeholder="Phone Number"
                        name="image"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '.9235rem',
                    }}
                  >
                    <Button type="submit" value="CREATE" className="btn-dark" />
                  </div>
                </form>
              </div>
            </Modal.Content>
          </Modal>
        </div>
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
                    <div className="product-card-footer d-flex justify-content-around align-items-center w-100">
                      <Link
                        to="/"
                        className="btn btn-transparent"
                        style={{
                          border: '0',
                          borderRadius: '0',
                          background: 'white',
                        }}
                      >
                        <i aria-hidden="true" className="eye icon black" />
                      </Link>
                      <Button
                        type="button"
                        name="button"
                        className="btn-transparent"
                        style={{
                          border: '0',
                          borderRadius: '0',
                          background: 'white',
                        }}
                      >
                        <i aria-hidden="true" className="edit icon teal" />
                      </Button>
                      <Button
                        type="button"
                        name="button"
                        className="btn-transparent"
                        style={{
                          border: '0',
                          borderRadius: '0',
                          background: 'white',
                        }}
                      >
                        <i aria-hidden="true" className="trash icon red" />
                      </Button>
                    </div>
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

Admin.propTypes = {
  getAllMeetups: PropTypes.func.isRequired,
  meetups: PropTypes.array,
  isLoading: PropTypes.bool,
  createMeetup: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
  isLoading: state.meetups.isLoading,
});

export default connect(
  mapStateToProps,
  { getAllMeetups, createMeetup },
)(Admin);
