import React from 'react';
import { Link } from 'react-router-dom';

// components
import Navbar from '../../components/presentational/Navbar/Navbar';
import Button from '../../components/presentational/Button/Button';
import UpcomingMeetups from '../../components/container/UpcomingMeetups/UpcomingMeetups';

// styles
import './Index.scss';

const Index = () => {
  return (
    <div>
      <div className="jumbotron">
        <Navbar />
        <div className="hero-image">
          <div className="hero-text">
            <h1>Questioner</h1>
            <p>An application to crowd-source questions for a meetup.</p>
            <Link to="/register">
              <Button
                type="button"
                name="button"
                className="btn btn-dark-alt"
                value="REGISTER"
              />
            </Link>
          </div>
        </div>
      </div>
      <UpcomingMeetups />
      <footer id="non-fixed-footer">
        <p>Made by Edidiong Udombat @ Andela </p>
      </footer>
    </div>
  );
};

export default Index;
