import reducer, { EventState, initialState, startLoading, setError, setEventState } from './index';

describe('betSlip reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: null})).toEqual(initialState)
  })

  it('should handle startLoading', () => {
    expect(
      reducer(initialState, startLoading())
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle setError', () => {
    expect(
      reducer(initialState, setError('error here'))
    ).toEqual({
      ...initialState,
      error: 'error here',
    });
  });

  it('should handle setEventState', () => {
    const testResponseData = [{id: 'id', name: 'name', markets: []}]
    expect(
      reducer(initialState, setEventState(testResponseData))
    ).toEqual({
      ...initialState,
      response: testResponseData,
    });
  });
})