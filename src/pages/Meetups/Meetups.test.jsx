import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { Meetups, mapStateToProps } from './Meetups';

let store;

describe('Meetups', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ meetups: { meetups: [] } });
  });

  it('should render correctly', () => {
    const props = {
      getAllMeetups: jest.fn(),
      meetups: [],
    };
    const component = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Meetups {...props} />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with all props', () => {
    const props = {
      getAllMeetups: jest.fn(),
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
    const component = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Meetups {...props} />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with all props and without image', () => {
    const props = {
      getAllMeetups: jest.fn(),
      meetups: [
        {
          id: 'fhwjicgyvufbewf',
          topic: 'topic',
          organizer_name: 'organizer_name',
          happening_on: '2020-05-18T21:28:41+0000',
        },
      ],
    };
    const component = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Meetups {...props} />
        </Provider>
      </BrowserRouter>,
    );
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
