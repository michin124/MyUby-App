import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState,useRef,useCallback, useEffect } from 'react';
import ExploreContainer from './ExploreContainer';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { Console } from 'console';
import { image } from 'ionicons/icons';
import { helphttp } from '../helpers/helphttp';


const guerrero={
 
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
  descripcion:"",
  categoria:"",
  imagen:undefined
};



const CrudForm = (props:any) =>{
 

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
  function Center() {
    if (!mapRef.current) return;
    const newPoso = mapRef.current.getCenter().toJSON();
    
  }

  let api=helphttp();
    
  let url='http://localhost:8000/images/'



  const [imagen, setImagen] = useState<File>();
  const subirImagenes=(e:any)=>{
    setImagen(e)

  }
  const[form,setForm]=useState(guerrero)
 
  useEffect(()=>{
    
    if(props.dataToedit){
     
      setForm(props.dataToedit);
    }else{
      
      setForm(guerrero);
    }
  },[props.dataToedit])




  const handlechange=(e:any)=>{
    setForm({
      ...form,[e.target.name]:e.target.value
    })
  }
  const handlesubmit = (e:any) =>{
    
    e.preventDefault();
    
    if(!form.nombretienda || !form.direccion)
    {
      alert("datos incompletos");
      return;
    }
    if(form.id===null)
    {
      form.foto=imagen!.name
      const f=new FormData();
      f.append('file',imagen!);
      //para traer el json es una cabecera
        
      fetch(url, {
        method: 'POST',
        body: f,

        // 👇 Set headers manually for single file upload
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
console.log(form)
        props.createData(form);
     
    }else{
      props.updateData(form);
    }
    
    
    handlereset(e);

    
  }
  const handlereset = (e:any) =>{
    
    setForm(guerrero);
    props.setDataToedit(null);
    
  }

  
  
    return(
        
      
      
          
            <IonRow class='formulario'>
              <IonRow>
              

                
              </IonRow>
              
              <GoogleMap
                onLoad={handleLoad}
                onCenterChanged={handleCenterChanged}
                onIdle={Center}
                zoom={16}
                center={props.center}
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
              
              
              
              

              


            <h2>{form.id ?"Editar":"Agregar"}</h2>
            
              <form onSubmit={handlesubmit} >
                {form.lat=position.lat}
                {form.lng=position.lng}
                <input type="text" name='lng' placeholder='lng'onChange={handlechange} value={form.lng}/>
                <input type="text" name='lat' placeholder='lat'onChange={handlechange} value={form.lat}/>
                <input
                  type="file"
                  name='imagen'
                  placeholder='imagen'
                  multiple onChange={(e:any) => subirImagenes(e.target.files[0])}
                />
                <input type="text" name='nombretienda' placeholder='nombre de la tienda'onChange={handlechange} value={form.nombretienda}/>
                <input type="text" name='foto' placeholder='foto'onChange={handlechange} value={imagen?.name}/>
                <input type="text" name='telefono' placeholder='telefono'onChange={handlechange} value={form.telefono}/>
                <input type="text" name='direccion' placeholder='direccion'onChange={handlechange} value={form.direccion}/>
                <input type="text" name='horario' placeholder='horario'onChange={handlechange} value={form.horario}/>
                <input type="checkbox" name='domicilio' placeholder='domicilio'onChange={handlechange} value="True"/>
                <input type="checkbox" name='parqueadero' placeholder='parqueadero'onChange={handlechange} value="True"/>
                <input type="text" name='especialidad' placeholder='especialidad'onChange={handlechange} value={form.especialidad}/>
                <input type="text" name='descripcion' placeholder='descripcion'onChange={handlechange} value={form.descripcion}/>
                




                
                <datalist id="browsers">
                {props.data1.map((info:any) => {
                return(<>
                    <option value={info.tipocategoria}/>

                  </>)
                })} 
                
                </datalist>

                <input placeholder='CATEGORIA' list="browsers" name="categoria" onChange={handlechange} />
                
                <input type="button" value="enviar" onClick={handlesubmit}/>
                <input type="reset" value="limpiar" onClick={handlereset}/>
              </form>
             
              {console.log(imagen)}
              <h2>CRUDD APP</h2>

             
            </IonRow>
          
          
          
                 



    );
};
export default CrudForm;