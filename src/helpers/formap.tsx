import React, { useState, useRef, useCallback } from "react";
import { LoadScript, GoogleMap, Marker ,useJsApiLoader} from "@react-google-maps/api";

export default function Map(props:any) {
  const mapRef:any = useRef(null);
  const [position, setPosition] = useState({
    lat: 4.578283266357103,
    lng: -74.11971172280586
  });
  const containerStyle = {
    width: '350px',
    height: '300px'
  };
  function handleLoad(map:any) {
    mapRef.current = map;
  }

  function handleCenterChanged() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
    
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
    
  })
  return isLoaded?(
    <GoogleMap
      onLoad={handleLoad}
      onCenterChanged={handleCenterChanged}
      zoom={16}
      center={position}
      mapContainerStyle={containerStyle}
      mapTypeId='3653ed0218e9613'
      options={{
        
        mapId:"3653ed0218e9613",
        maxZoom:19,
        minZoom:15.5,
        mapTypeControl:false
      }}
      id="map"
    >
      <Marker position={position} />
    </GoogleMap>
  ): <></>
}