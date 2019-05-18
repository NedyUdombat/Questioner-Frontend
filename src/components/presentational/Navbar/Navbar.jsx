import React from 'react';
import { Icon } from 'semantic-ui-react';

// styles
import './Navbar.scss';
import '../Button/Button.scss';

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <p className="nav-title">Questioner</p>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <Icon name="bars" color="grey" size="big" />
          </label>
        </div>

        <div className="nav-links">
          <a href="#" className="btn btn-transparent">
            MEETUPS
          </a>
          <a href="#" className="btn btn-dark-alt">
            LOGIN
          </a>
          <a href="#" className="btn btn-white-alt-hover">
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
