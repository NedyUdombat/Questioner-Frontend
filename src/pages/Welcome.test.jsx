import React from 'react';
import { shallow } from 'enzyme';

import Welcome from './Welcome';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<Welcome />);
    expect(component).toMatchSnapshot();
  });
});
