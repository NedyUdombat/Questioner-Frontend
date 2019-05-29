import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './Navbar';

const props = {
  username: jest.fn(),
  logOut: jest.fn(),
  className: 'navbar',
};

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = mount(
      <BrowserRouter>
        <Navbar {...props} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
