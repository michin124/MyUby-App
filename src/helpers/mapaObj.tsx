import {Marker, DirectionsRenderer,Circle,MarkerClusterer } from '@react-google-maps/api';
import {useState, useCallback} from 'react';
import React, { useMemo, useRef } from 'react'
import { useEffect } from 'react';
import { GoogleMap, LoadScript ,StreetViewService,useJsApiLoader, GoogleMarkerClusterer} from '@react-google-maps/api';
import { laptop, options, timer } from 'ionicons/icons';
import { MdPets} from "react-icons/md";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { RiMarkPenFill } from 'react-icons/ri';
import { helphttp } from './helphttp';

type Mapmarker=google.maps.Marker
const containerStyle = {
  width: '350px',
  height: '400px',
 marginTop:'-0px'
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

function MapaObj(props:any) {
  
  const Categorias=props.Categorias
  const mapRef=useRef('')
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  let long=0
  let lati=0
  
  const cent=({
    lat:parseFloat(props.latitude),
    lng:parseFloat(props.Longitude)})

 
  

    

 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAoKzza6IcVFgGB8tYVQDL1PaG1eQXAez4",
    
  })
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
    
    
    navigator.geolocation.getCurrentPosition(
      (pos:any)=>{
        const crd = pos.coords;
        long=crd.longitude;
        lati=crd.latitude;
       
        
        //let gMap = new google.maps.Map(document.getElementById('mapita')??new Element()); 
       
        // map.setZoom(50);      // This will trigger a zoom_changed on the map
        map.setCenter(new google.maps.LatLng(cent));
        // map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      },
      function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)},
      {
        enableHighAccuracy:true,
        timeout:8000,
        maximumAge:0
      }
    )
  }, [])

  
    const [dbt,setdbt]=useState(initialDbt)
    const[errort,setErrort]=useState(null);
    
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
  
  


  return isLoaded ? (
    <div>
      <GoogleMap
      id='mapita'
      onLoad={onLoad} 
      zoom={17.5}
      mapContainerStyle={containerStyle}
      mapTypeId='3653ed0218e9613'
    
      options={{
        mapId:"3653ed0218e9613",
        maxZoom:19,
        minZoom:15.5,
        mapTypeControl:true
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

export default MapaObj