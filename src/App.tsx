import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ResponseType } from './app/ResponseTypes'
import { EventCard } from './components/EventCard';
import { Nav } from './components/Nav';
import { getEventsAsync, selectEventResponse } from './redux/EventSlice'

function App() {
  const responseData: ResponseType = useSelector(selectEventResponse);
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
        {responseData?.length > 0 && responseData.map( event => event?.markets?.length > 0 && (
          <EventCard key={event.id} event={event}/>
        ))}
    </div>
  );
}

export default App;
