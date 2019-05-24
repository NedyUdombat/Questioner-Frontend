import React from 'react';
import { mount } from 'enzyme/build';
import { BrowserRouter } from 'react-router-dom';

import { Register, mapStateToProps } from './Register';

const props = {
  isLoading: false,
  register: jest.fn(),
};

const loadingProps = {
  isLoading: true,
  register: jest.fn(),
};

const mountWrapper = mount(
  <BrowserRouter>
    <Register {...props} />
  </BrowserRouter>,
);

describe('Register', () => {
  it('should render correctly', () => {
    const component = mount(
      <BrowserRouter>
        <Register {...props} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with loader', () => {
    const component = mount(
      <BrowserRouter>
        <Register {...loadingProps} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const DEFAULT_STATE = {
      auth: {
        isLoading: false,
      },
    };
    const action = mapStateToProps(DEFAULT_STATE);
    expect(action).toEqual(DEFAULT_STATE.auth);
  });

  it('correctly initializes the value of the username field to an empty string', () => {
    expect(mountWrapper.find('input[name="username"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="email"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="password"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="firstname"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="lastname"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="othername"]').prop('value')).toBe('');
    expect(mountWrapper.find('input[name="phonenumber"]').prop('value')).toBe(
      '',
    );
    expect(
      mountWrapper.find('input[name="confirmpassword"]').prop('value'),
    ).toBe('');
  });

  it('should submit the form', () => {
    const email = mountWrapper.find('input[name="email"]');
    email.instance().value = 'nedyudombat@gmail.com';
    email.simulate('change');
    const password = mountWrapper.find('input[name="password"]');
    password.instance().value = 'Iamtheadmin';
    password.simulate('change');
    const form = mountWrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(mountWrapper.state()).toEqual(null);
  });
});
