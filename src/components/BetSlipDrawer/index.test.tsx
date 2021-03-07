import React from 'react';
import configureStore, { MockStore } from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BetSlipDrawer } from './';
import { RemoveBet } from '../../redux/BetSlipSlice';
import { exampleBet } from '../../testResources';
 
const mockStore = configureStore([]);

describe('BetSlipCard', () => {
  let store: MockStore;
  let component: renderer.ReactTestRenderer;
  let onClose: () => void;

  beforeEach(() => {
    onClose = jest.fn();
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
        <BetSlipDrawer onClose={onClose} />
      </Provider>
    );
  });

  it('should display', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should fire onClose on button click', () => {
    renderer.act(() => {
      component.root.findByProps({"aria-label": "menu"}).props.onClick();
    });
 
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith();
  });
});