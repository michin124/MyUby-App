import {IonPopover, IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { IoBeer, IoNavigate } from "react-icons/io5";
import React, { useState } from 'react';
import Mapcat from '../helpers/mapo';
import { FcGlobe} from "react-icons/fc";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineStorefront} from "react-icons/md";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";


import './categoria.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { info } from 'console';


let lati:any
let long:any

const Categoria= (el:any) => {
  const [range, setCurrentRange] = useState('');
  const [filter, setCurrentFilter] = useState('');
  
  

  let UrlI='http://127.0.0.1:8000/media/images/'
  let cuenta
  
  let { categori }:any =useParams();
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let idcategori=query.get("idcategori");
  let lat=query.get("lat");
  let long=query.get("longs");
  let filters=query.get("filter")

  const options = {
    //enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
  };
  
  
  const [logs, setLogs] = useState('')
  const pushRange = (msg: any) => {
    setCurrentRange(msg);
    
  };
  const pushFilt = (msg: any) => {
    setCurrentFilter(msg);
    <a href="as">g</a>
    
  };
  
  const otros=[];
  
  let filtro=1

  

if(range=="Mascercanos"){
  
  if(filter=="Todos"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Descuentos"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Promociones"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Domicilios"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Menoresprecios"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Mayoresprecios"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Populares"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < el.data?.length; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  
}



  const success=(pos:any)=> {
    const crd = pos.coords;
    long=crd.longitude
    lati=crd.latitude
    return(lati+long)
    
  }
  navigator.geolocation.getCurrentPosition(success, error, options)
  function error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  } 
  navigator.geolocation.getCurrentPosition(success, error, options)
 
  

 
  
  


  return (
    <IonPage>
      
      <IonHeader class='header'>
      <IonRow class='header2'>
      <IonCol class="x"><FcGlobe size="50"></FcGlobe></IonCol>
      <IonCol class="x2"><h2>ADRESS</h2></IonCol>
      <IonCol class="x3"><h2>MYUBY</h2></IonCol>
      </IonRow>  
      </IonHeader>
      <IonContent fullscreen>

      <IonRow class ="tipol">
      {categori=="BARES" &&
         <IonCol class="logo1" ><IoBeer size="100"></IoBeer></IonCol>
      }
        {categori=="RESTAURANTES" &&
         <IonCol class="logo1" ><MdOutlineStorefront size="90"></MdOutlineStorefront></IonCol>
      }
      {categori=="ESTADEROS" &&
         <IonCol class="logo1" ><FaBed size="90"></FaBed></IonCol>
      }
      {categori=="PAPELERIAS" &&
         <IonCol class="logo1" ><FaPencilRuler size="90"></FaPencilRuler></IonCol>
      }
      {categori=="FERRETERIAS" &&
         <IonCol class="logo1" ><FaBriefcase size="90"></FaBriefcase></IonCol>
      }
      {categori=="VETERINARIAS" &&
         <IonCol class="logo1" ><MdPets size="90"></MdPets></IonCol>
      }
      {categori=="CAFETERIAS" &&
         <IonCol class="logo1" ><FiCoffee size="90"></FiCoffee></IonCol>
      }
      
      </IonRow>
      <IonRow class ="titulol">
        <h3><b>{categori}</b></h3>
      </IonRow>
      <IonRow class='selector'>
          
        <IonCol className='colFilterOne'>
          <IonCol >
            <IonLabel>Rango:</IonLabel>
          </IonCol>
          <IonSelect placeholder="Seleccionar" className='filtro1' onIonChange={(e) => pushRange(`${e.detail.value}`)}>
            <IonSelectOption className='select' value="Mascercanos">Mas cercanos</IonSelectOption>
            <IonSelectOption className='select' value="De 1 a 3km" >De 1 a 3km</IonSelectOption>
            <IonSelectOption className='select' value="De 3 a 6km">De 3 a 6km</IonSelectOption>
            <IonSelectOption className='select' value="De 6 a 10km" >De 6 a 10km</IonSelectOption>
            <IonSelectOption className='select' value="Mas de 10km">Mas de 10km</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol className='colFiltertwo'>
          <IonCol >
            <IonLabel>Ordenar Por:</IonLabel>
          </IonCol>
          <IonSelect placeholder="Seleccionar" className='filtro2' onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
            <IonSelectOption className='select' value="Todos" >Todos</IonSelectOption>
            <IonSelectOption className='select' value="Descuentos" >Descuentos</IonSelectOption>
            <IonSelectOption className='select' value="Promociones" >Promociones</IonSelectOption>
            <IonSelectOption className='select' value="Domicilios">Domicilios</IonSelectOption>
            <IonSelectOption className='select' value="Menoresprecios" >Menores Precios</IonSelectOption>
            <IonSelectOption className='select' value="Mayoresprecios" >Mayores Precios</IonSelectOption>
            <IonSelectOption className='select' value="Populares">Populares</IonSelectOption>
          </IonSelect>
        </IonCol>
        
       
        
        


      </IonRow>
      
      
      <IonRow class="categoria">
      {cuenta>0&&
          
          cuenta>0 ?(otros.map((info:any) => {
            
            let url=`/productostienda?idcategori=${idcategori}`+`&idtienda=${info.id}`;
            return(<>

              {info.foto!='' &&
              <IonRow>
                <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info.nombretienda}</IonRow></IonCol>

              </IonRow>
                }
            </>)
          
          })):
          (
            <h2 className='errorcategorias'>Ups parece que no tienes {categori} cerca tuyo....</h2>
          )

          
        

      }
        
      </IonRow>
      {cuenta>1&&
        <IonRow>
            <IonRow class="titulo3">
              <h3><b>{categori}</b> EN EL MAPA</h3>
            </IonRow>


            <IonRow class="mapa">
              <IonCol class="mapas">
                <Mapcat latitude={lati} Longitude={long} Categorias={idcategori} Filtro={filtro} Otros1={el.data} Otros2={el.dataprom} Otros3={el.datadesc} 
                />
              
              </IonCol>

            </IonRow>
        </IonRow>
      }



      </IonContent>
      
    </IonPage>
  );
};

export default Categoria;
