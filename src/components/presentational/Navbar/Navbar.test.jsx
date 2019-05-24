import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = mount(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
