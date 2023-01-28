import {Marker, DirectionsRenderer,Circle,MarkerClusterer } from '@react-google-maps/api';
import {useState, useCallback} from 'react';
import React, { useMemo, useRef } from 'react'
import { useEffect } from 'react';
import { GoogleMap, LoadScript ,StreetViewService,useJsApiLoader, GoogleMarkerClusterer} from '@react-google-maps/api';
import { laptop, options } from 'ionicons/icons';
import { MdPets} from "react-icons/md";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { RiMarkPenFill } from 'react-icons/ri';
import { helphttp } from '../helpers/helphttp';
import Categoria from '../pages/categoria';

type Mapmarker=google.maps.Marker
const containerStyle = {
  width: '350px',
  height: '300px'
};
const initialDbt=[
  {
    id: null,
    nombretienda: "",
    foto: "",
    telefono: "",
    direccion: "",
    horario: "",
    domicilio: false,
    parqueadero:false ,
    especialidad: "",
    lat:0,
    lng:0,
    descripcion:""
      
  }
]


function Mapcat(props:any) {
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
 
  const [lati,setLati]=React.useState(1)  
  const [long,setLong]=React.useState(1)  
  const options = {
    //enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  const success=(pos:any)=> {
    const crd = pos.coords;
    setLong(crd.longitude)
    setLati(crd.latitude) 
  }
  function error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  } 
  navigator.geolocation.getCurrentPosition(success, error, options)
  const mapRef=useRef(null)
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  let [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: parseFloat(props.latitud),
    lng: parseFloat(props.Longitud),
    
  });
  
  
  

 

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    
    setClicks([...clicks, e.latLng!]);
  };
 

  function onIdle(m: google.maps.Map){
    
    setCenter(m.getCenter()!.toJSON());
  };

  function handleLoad(map:any) {
    mapRef.current = map;
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAoKzza6IcVFgGB8tYVQDL1PaG1eQXAez4",
    
  })
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center,null);
    map.fitBounds(bounds);
  }, [])

  
   
   
   
//dependiendo el filtro aparecen las tiendas
  const Tloc=[];
 {
    if(props.Filtro==1){
      for(let i = 0; i < props.todos.length; i++) {
        Tloc[i]=props.todos[i]
        
      }
    }

    if(props.Filtro==2){
      for(let i = 0; i < props.prom.length; i++) {
        Tloc[i]=props.prom[i]
        
      }
    }
    if(props.Filtro==3){
      for(let i = 0; i < props.desc.length; i++) {
        Tloc[i]=props.desc[i]
        
      }
    }
    if(props.Filtro==4){
      for(let i = 0; i < props.domi.length; i++) {
        Tloc[i]=props.domi[i]
        
      }
    }
    if(props.Filtro==5){
      for(let i = 0; i < props.menos.length; i++) {
        Tloc[i]=props.menos[i]
        
      }
    }
    if(props.Filtro==6){
      for(let i = 0; i < props.just.length; i++) {
        Tloc[i]=props.just[i]
        
      }
    }
    if(props.Filtro==7){
      for(let i = 0; i < props.pet.length; i++) {
        Tloc[i]=props.pet[i]
        
      }
    }
    if(props.Filtro==8){
      for(let i = 0; i < props.eleg.length; i++) {
        Tloc[i]=props.eleg[i]
        
      }
    }
    if(props.Filtro==9){
      for(let i = 0; i < props.joy.length; i++) {
        Tloc[i]=props.joy[i]
        
      }
    }
    
    
  }
     
  return isLoaded ? (
    <div>
      <GoogleMap
      center={center}
      onClick={onClick}
      onLoad={handleLoad} 
      zoom={16}
      mapContainerStyle={containerStyle}
      mapTypeId='3653ed0218e9613'
    
      options={{
        mapId:"3653ed0218e9613",
        maxZoom:19,
        minZoom:16.5,
        mapTypeControl:false
      }}
      >
        {<Marker position={center} animation={google.maps.Animation.BOUNCE} opacity={1} icon={iconBase + 'parking_lot_maps.png'}/>}
        
        {Tloc.map((info:any) => {
            const cento=({
              lat:parseFloat(info.lat),
              lng:parseFloat(info.lng)})
            return(<>
              {<Marker position={cento} opacity={0.8}/>}
            </>) 
        })} 
        
      </GoogleMap>
      </div>
  ): <></>
  
}

export default Mapcat