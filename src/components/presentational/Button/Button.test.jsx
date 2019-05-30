import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

const clickTest = jest.fn();

describe('Button', () => {
  it('should render correctly', () => {
    const component = mount(
      <Button className="btn" type="button" value="login" onClick={clickTest()}>
        hey
      </Button>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const component = mount(
      <Button className="btn" type="button" onClick={clickTest()}>
        hey
      </Button>,
    );
    expect(component).toMatchSnapshot();
  });
});
