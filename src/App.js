import './App.css';
import Home from './page/Home/Home';
import React , {useState,useEffect} from 'react'
import {socket} from './socket';


function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    console.log('Try to connect with socket server ');

    function onConnect() {
      setIsConnected(true);
      console.log('---------- isconnected yes');
    }
    
    function onDisconnect() {
      setIsConnected(false);
      console.log('---------- isconnected no');
    }

    // function onFooEvent(value) {
    //   setFooEvents(previous => [...previous, value]);
    // }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    // socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      // socket.off('foo', onFooEvent);
    };
  }, []);

  useEffect(()=>{
    console.log('isConnected : ', isConnected);
  },[isConnected])
  
  // useEffect(()=>{
  //   console.log('isFooEvent : ', fooEvents);
  // },[fooEvents])


  return (
    <div className='app_main'>
      <Home/>
    </div>
  );
}

export default App;
