import {useState, useEffect } from 'react'; 
import Loader from './Components/Loader';
import Map from './Components/Map';


function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async ()=>{
        setLoading(true);
        const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
        const { events }  = await res.json();

        setEventData(events);
        setLoading(false);
    }
    
    fetchData();
  }, [] )

  return (
    <div className="App">
      { !loading ? <Map eventData={eventData} /> : <Loader/> }
    </div>
  );
}

export default App;
