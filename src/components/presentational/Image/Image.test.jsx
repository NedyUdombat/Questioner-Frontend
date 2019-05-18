import React from 'react';
import { mount } from 'enzyme';

import Image from './Image';

describe('Image', () => {
  it('should render correctly', () => {
    const component = mount(
      <Image alt="Image alt" src="http://dummyimage.jpg" className="class" />,
    );
    expect(component).toMatchSnapshot();
  });
});
