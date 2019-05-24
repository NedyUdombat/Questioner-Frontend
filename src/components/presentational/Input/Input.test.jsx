import React from 'react';
import { mount } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  it('should render correctly', () => {
    const component = mount(
      <Input
        placeholder="placeholder"
        className="form-control"
        type="text"
        onChange={jest.fn()}
        value="value"
        name="name"
        required="required"
        minLength="20"
        pattern="($^+[a-z])"
        title="title"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
