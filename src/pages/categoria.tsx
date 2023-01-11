import { IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
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
  let UrlI='http://127.0.0.1:8000/media/images/'
  let cuenta=el.data?.length || 0;
  let history=useHistory();
  let { categori }:any =useParams();
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let idcategori=query.get("idcategori");
  const options = {
    //enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  const success=(pos:any)=> {
    const crd = pos.coords;
    long=crd.longitude
    lati=crd.latitude
    return(lati)
    return(long)
  }
  function error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  } 
  {navigator.geolocation.getCurrentPosition(success, error, options)}
  
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
      
     
      <IonRow class="categoria">
      
        {cuenta>0 ?(el.data.map((info:any) => {
         
          let url=`/productostienda?idcategori=${idcategori}`+`&idtienda=${info.id}`;
          return(<>

            {info.foto!='' &&
            
              <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info.nombretienda}</IonRow></IonCol>
            }
          </>)
        
      })):
      (
        <h2></h2>
      )

    }
      </IonRow>
      
      <IonRow class="titulo3">
        <h3><b>{categori}</b> CERCA TUYO</h3>
      </IonRow>

      <IonRow class="mapa">
        <IonCol class="mapas">
        
        
        {lati==undefined &&
          
          <Mapcat refresh={true} reload={true}
          />
          
        }
        {lati!=undefined &&
          
          <Mapcat latitude={lati} Longitude={long} Categorias={idcategori}
          />
        }
         </IonCol>
 
      </IonRow>
      

      </IonContent>
    </IonPage>
  );
};

export default Categoria;
