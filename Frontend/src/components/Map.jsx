import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import logo from '../images/LNMIIT.png';
import bus from '../images/bus.png'

const containerStyle = {
  width: '100%',
  height: '400px',
};

export function Map({ busID }) {

  const [center] = useState({
    lat: 38.889805,
    lng: -77.009056,
  });

  const [markerPosition, setMarkerPosition] = useState({
    lat: 38.889805,
    lng: -77.009056,
  });

  useEffect(() => {
    const ws = new WebSocket('wss://bus-project.onrender.com');

    ws.onmessage = async (event) => {
      const data = event.data instanceof Blob ? await event.data.text() : event.data;
      const finalData = JSON.parse(data);
      

      if (finalData.busID === busID) {
        const { latitude, longitude } = finalData;
        if (latitude && longitude) {
          setMarkerPosition({
            lat: latitude,
            lng: longitude,
          });
        }
      }
    };

    return () => {
      ws.close();
    };
  }, [busID]);

  return (
    <div>
      <div className="h-5 w-full bg-maroon" />
      <div className="bg-white-200 flex flex-auto shadow-md">
        <img src={logo} className="h-12 w-32 ml-auto mb-2 mt-1" alt="Logo" />
      </div>

      <div className="bg-maroon p-3">
        <h1 className="flex justify-center items-center text-2xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          Tracking Bus: {busID}
        </h1>
      </div>

      <div className="border border-gray-600 rounded-lg m-5 p-4 mt-10">
        <LoadScript googleMapsApiKey="AIzaSyA8vewM25--O4knZybZPzm1DI5VD_xjmrM">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={markerPosition}/>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
