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
  const Categorias=props.Categorias
  const mapRef=useRef(null)
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  let [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 4.578283266357103,
    lng: -74.11971172280586,
    
  });
  
  const cent=({
    lat:props.latitude,
    lng:props.Longitude})
  
  const cento=({
    lat:props.latitude,
    lng:props.Longitude})

 
  

    

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

  
    const [dbt,setdbt]=useState(initialDbt)
    const [dataToeditt,setDataToeditt]=useState(null);
    const[errort,setErrort]=useState(null);
    const [dataToedit,setDataToedit]=useState(null);
    
    let api=helphttp();
   

    
    
    let urltiendas="http://127.0.0.1:8000/Tiendasback/Tiendas/"


    
  
   useEffect(()=>{
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
  
  

  const Tloc=[];
    {for(let i = 0; i < dbt.length; i++) {
      Tloc[i]=dbt[i]
      
    }}

  return isLoaded ? (
    <div>
      <GoogleMap
      center={cent}
      onClick={onClick}
      onLoad={handleLoad} 
      zoom={16}
      mapContainerStyle={containerStyle}
      mapTypeId='3653ed0218e9613'
    
      options={{
        mapId:"3653ed0218e9613",
        maxZoom:19,
        minZoom:15.5,
        mapTypeControl:false
      }}
      >
        {<Marker position={cent} animation={google.maps.Animation.BOUNCE} opacity={0.8}/>}
        
        {dbt.map((info:any) => {

          
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

export default MyComponent