import React from 'react';
import { shallow } from 'enzyme/build';
import { BrowserRouter } from 'react-router-dom';

import Authentication from './Authentication';

const propsRegister = {
  match: {
    path: '/register',
  },
};

const propsLogin = {
  match: {
    path: '/login',
  },
};

describe('Authentication', () => {
  it('should render correctly', () => {
    const component = shallow(
      <BrowserRouter>
        <Authentication {...propsRegister} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with Login', () => {
    const component = shallow(
      <BrowserRouter>
        <Authentication {...propsLogin} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with Login', () => {
    const component = shallow(<Authentication {...propsLogin} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with register', () => {
    const component = shallow(<Authentication {...propsRegister} />);
    expect(component).toMatchSnapshot();
  });
});
