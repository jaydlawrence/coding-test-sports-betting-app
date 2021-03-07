import reducer, { EventState, initialState, startLoading, setError, setEventState } from './index';

const messyInitialState = {
  isLoading: true,
  response: [{
    id: 'test',
    name: 'testName',
    markets: [],
  }],
  error: 'testError',
}

describe('betSlip reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: null})).toEqual(initialState)
  })

  it('should handle startLoading', () => {
    expect(
      reducer({
        ...messyInitialState,
        isLoading: false
      }, startLoading())
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle setError', () => {
    expect(
      reducer(messyInitialState, setError('error here'))
    ).toEqual({
      ...messyInitialState,
      isLoading: false,
      error: 'error here',
    });
  });

  it('should handle setEventState', () => {
    const testResponseData = [{id: 'id', name: 'name', markets: []}]
    expect(
      reducer(messyInitialState, setEventState(testResponseData))
    ).toEqual({
      ...initialState,
      response: testResponseData,
    });
  });
})