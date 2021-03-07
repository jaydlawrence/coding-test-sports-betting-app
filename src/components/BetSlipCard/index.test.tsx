import React from 'react';
import configureStore, { MockStore } from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BetSlipCard } from '.';
import { RemoveBet } from '../../redux/BetSlipSlice';
import { exampleBet } from '../../testResources';
 
const mockStore = configureStore([]);

describe('BetSlipCard', () => {
  let store: MockStore;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({});
 
    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <BetSlipCard bet={exampleBet} />
      </Provider>
    );
  });

  it('should display', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should fire remove dispatch on remove button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      RemoveBet(exampleBet.selectionId)
    );
  });
});