import { useState, useEffect } from 'react';
import logo from '../images/LNMIIT.png';

export function WebSocketComponent({busID}) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://bus-project.onrender.com');

    const sendPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLat(latitude);
        setLong(longitude);

        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ busID, latitude, longitude }));
          console.log("SENT")
        }
      });
    };

    sendPosition();
    const interval = setInterval(sendPosition, 3000);

    return () => {
      clearInterval(interval);
      ws.close();
    };
  }, []);

  return (
    <div>
      <div className="h-5 w-full bg-maroon" />
      <div className="bg-white-200 flex flex-auto shadow-md">
        <img src={logo} className="h-12 w-32 ml-auto mb-2 mt-1" alt="Logo" />
      </div>
      <div className="bg-maroon p-3">
        <h1 className="flex justify-center items-center text-2xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          Being Tracked...
        </h1>
      </div>
    </div>
  );
}
