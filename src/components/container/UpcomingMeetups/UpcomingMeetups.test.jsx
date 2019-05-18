import React from 'react';
import { mount } from 'enzyme';

import { UpcomingMeetups, mapStateToProps } from './UpcomingMeetups';

describe('UpcomingMeetups', () => {
  it('should render correctly', () => {
    const props = {
      getUpcomingMeetups: jest.fn(),
      meetups: [],
    };
    const component = mount(<UpcomingMeetups {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with all props', () => {
    const props = {
      getUpcomingMeetups: jest.fn(),
      meetups: [
        {
          id: 'fhwjicgyvufbewf',
          image: 'http://dummyinge.jpg',
          topic: 'topic',
          organizer_name: 'organizer_name',
          happening_on: '2020-05-18T21:28:41+0000',
        },
      ],
    };
    const component = mount(<UpcomingMeetups {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with all props and without image', () => {
    const props = {
      getUpcomingMeetups: jest.fn(),
      meetups: [
        {
          id: 'fhwjicgyvufbewf',
          topic: 'topic',
          organizer_name: 'organizer_name',
          happening_on: '2020-05-18T21:28:41+0000',
        },
      ],
    };
    const component = mount(<UpcomingMeetups {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should mount with the correct state', () => {
    const DEFAULT_STATE = {
      meetups: {
        meetups: [],
      },
    };
    const action = mapStateToProps(DEFAULT_STATE);
    expect(action).toEqual(DEFAULT_STATE.meetups);
  });
});
