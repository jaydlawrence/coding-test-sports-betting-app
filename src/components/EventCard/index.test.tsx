import React from 'react';
import configureStore, { MockStore } from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { EventCard } from '.';
import { AddRemoveBet } from '../../redux/BetSlipSlice';
import { exampleBet, exampleResponse } from '../../testResources';
import { SelectionButton } from './styles';
 
const mockStore = configureStore([]);

describe('BetSlipCard', () => {
  let store: MockStore;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
      betSlips: {
        bets: [
          exampleBet
        ]
      }
    });
 
    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <EventCard event={exampleResponse[0]} />
      </Provider>
    );
  });

  it('should display', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should fire addremove dispatch on button click', () => {
    renderer.act(() => {
      component.root.findAllByType(SelectionButton)[0].props.onClick();
    });
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      AddRemoveBet(exampleBet)
    );
  });
});