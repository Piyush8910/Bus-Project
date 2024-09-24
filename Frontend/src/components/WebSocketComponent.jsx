import { useState, useEffect } from 'react';

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
      <h2>Geolocation:</h2>
      <p>Latitude: {lat}, Longitude: {long}</p>
    </div>
  );
}
