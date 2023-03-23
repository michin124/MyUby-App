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

function MyComponent(props:any) {
 
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
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.Longitude),
    
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

    mapRef.current = map;
    navigator.geolocation.getCurrentPosition(
      (pos:any)=>{
        const crd = pos.coords;
        
       
        //let gMap = new google.maps.Map(document.getElementById('mapita')??new Element()); 
        
        // map.setZoom(50);      // This will trigger a zoom_changed on the map
        map.setCenter(new google.maps.LatLng(crd.latitude, crd.longitude))
        
        // map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      },
      function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)},
      {
        enableHighAccuracy:true,
        timeout:8000,
        maximumAge:0
      }
    )
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAoKzza6IcVFgGB8tYVQDL1PaG1eQXAez4",
    
  })
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center,null);
    map.fitBounds(bounds);
  }, [])

  
  const [dbt,setdbt]=useState(initialDbt)
  const[errort,setErrort]=useState(null);
  
  let api=helphttp();
 
  let urltiendas="http://127.0.0.1:8000/Tiendasback/Tiendas/"


  
  const Categorias=props.Categorias
  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(
      (pos:any)=>{
        const crd = pos.coords;
        setCenter({
          lat: parseFloat(crd.latitude),
          lng: parseFloat(crd.longitude),
          
        })
       
        //let gMap = new google.maps.Map(document.getElementById('mapita')??new Element()); 
        
        // map.setZoom(50);      // This will trigger a zoom_changed on the map
        
        
        // map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      },
      function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)},
      {
        enableHighAccuracy:true,
        timeout:8000,
        maximumAge:0
      }
    )

    
    let guno=`${urltiendas}${Categorias}`;
      helphttp()
      .get(guno).then((res)=>{

        if(!res.err){
          setdbt(res.tiendas)
          setErrort(null)
        }else{
          setdbt([])
          setErrort(res)
        }
      })
  },[urltiendas]);
   
   

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
        minZoom:1,
        mapTypeControl:false
      }}
      >
        
        {dbt.map((info:any) => {

          
        const cento=({
          lat:parseFloat(info.lat),
          lng:parseFloat(info.lng)})



        return(<>

          {<Marker position={cento} opacity={0.8}/>}
          {<Marker position={center} animation={google.maps.Animation.BOUNCE} opacity={1} icon={iconBase + 'parking_lot_maps.png'}/>}
        
          
        </>)

        })} 
        
      </GoogleMap>
      </div>
  ): <></>
  
}
  

export default MyComponent