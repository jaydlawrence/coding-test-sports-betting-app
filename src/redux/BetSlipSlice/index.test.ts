import reducer, { BetSlipState, BetType, initialState, AddRemoveBet, RemoveBet } from './index';

const exampleBet: BetType = {
  eventName: 'eventName',
  eventId: 'eventId',
  marketName: 'marketName',
  marketId: 'marketId',
  selectionName: 'selectionName',
  selectionId: 'selectionId',
  selectionPrice: 3.50,
};

describe('betSlip reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: null})).toEqual(initialState)
  })

  it('should remove existing with AddRemoveBet', () => {

    const initialLocalState: BetSlipState = {
      bets: [
        exampleBet,
      ],
    };

    expect(
      reducer(initialLocalState, AddRemoveBet(exampleBet))
    ).toEqual({bets:[]});
  });

  it('should add new with AddRemoveBet', () => {

    const initialLocalState: BetSlipState = {
      bets: [],
    };

    expect(
      reducer(initialLocalState, AddRemoveBet(exampleBet))
    ).toEqual({
      bets: [
        exampleBet,
      ],
    });
  });

  it('should remove existing with RemoveBet', () => {

    const initialLocalState: BetSlipState = {
      bets: [
        exampleBet,
      ],
    };

    expect(
      reducer(initialLocalState, RemoveBet(exampleBet.selectionId))
    ).toEqual({bets:[]});
  });
})