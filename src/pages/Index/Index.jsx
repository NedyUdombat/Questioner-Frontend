import React from 'react';

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
            <a href="#">
              <Button
                type="button"
                name="button"
                className="btn btn-dark-alt"
                value="REGISTER"
              />
            </a>
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
