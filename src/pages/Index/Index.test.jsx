import React from 'react';
import { shallow } from 'enzyme/build';

import Index from './Index';

describe('Index', () => {
  it('should render correctly', () => {
    const component = shallow(<Index />);
    expect(component).toMatchSnapshot();
  });
});
