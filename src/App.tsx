import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ResponseType } from './app/ResponseTypes'
import { EventCard } from './components/EventCard';
import { Nav } from './components/Nav';
import { getEventsAsync, selectEventResponse, selectEventLoadingAndErrors } from './redux/EventSlice'

const App: React.FunctionComponent = () =>  {
  const responseData: ResponseType = useSelector(selectEventResponse);
  const {
    isLoading,
    error
  } = useSelector(selectEventLoadingAndErrors);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getEventsAsync())
    },
    []
  );
  return (
    <div>
        <Nav />
        {isLoading && <LinearProgress />}
        {error.length > 0 && <Alert severity="error">{error}</Alert>}
        {responseData?.length > 0 && responseData.map( event => event?.markets?.length > 0 && (
          <EventCard key={event.id} event={event}/>
        ))}
    </div>
  );
}

export default App;
