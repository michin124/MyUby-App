import { IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer, IoNavigate} from "react-icons/io5";
import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {ImLocation}from "react-icons/im"


import './tienda.css';
import './sobretienda.css';
import { colorFill } from 'ionicons/icons';

const Sobretienda= (el:any) => {
  let UrlI='http://127.0.0.1:8000/media/images/'
  let history=useHistory();
  let image=require.context('../images/',true)
  let { categori }:any =useParams();
  let {nombretienda,foto,telefono,direccion,horario,domicilio,parqueadero,especialidad,id}=el.data[0];

  let url1=`/productostienda?idtienda=${el.idtienda}`
  let url2=`/infotienda?idtienda=${el.idtienda}`
  
 
  if (domicilio==true) {
    domicilio=" Disponible"
    //  block of code to be executed if the condition is true
  }
  else{
    domicilio=" No Disponible"
  }
  if (parqueadero==true) {
    parqueadero=" Disponible"
    //  block of code to be executed if the condition is true
  }
  else{
    parqueadero=" No Disponible"
  }
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
        <IonRow class='titulodis'>
            <h3>abierto</h3>
        </IonRow>
        {foto!='' &&
          <IonRow class='fototienda'>
            <img src={`${UrlI}${foto}`} sizes={'100'} alt="Logo" />
          </IonRow>
        }
        <IonRow class='estrellastienda'>
        <RiStarSFill size="40"></RiStarSFill><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine>
        </IonRow>
        <IonRow class='nombretienda'>
          <h2>{nombretienda}</h2>
        </IonRow>
        <IonRow class='botonestienda'>
                 
          <IonButton class="productostienda" href={url1} color="white" expand="full" fill="clear" size='large'> <h3 >PRODUCTOS</h3></IonButton> 
          <IonButton class="infotienda" href={url2} color="white" expand="full" fill="clear" size='large'> <a ><h3>INFO TIENDA</h3></a></IonButton>
          
        </IonRow>
        
        
        <IonRow class='info'>
          <h3>Numero:{telefono} </h3>
          <h3>Direccion:{direccion} </h3>
          <h3>Horario:{horario} </h3>
          {domicilio==" Disponible" && 
          <h3 style={{color:"green"}}>Domicilio:{domicilio} </h3>}
          {domicilio==" No Disponible" && 
          <h3 style={{color:"red"}}>Domicilio:{domicilio} </h3>}
          {parqueadero==" Disponible" && 
          <h3 style={{color:"green"}}>Parqueadero:{parqueadero} </h3>}
          {parqueadero==" No Disponible" && 
          <h3 style={{color:"red"}}>Parqueadero:{parqueadero} </h3>}
        </IonRow>
        <IonRow class='destaca' >
          <h2>SE DESTACA POR: </h2>
          <h3 style={{color:"blue"}}>{especialidad} </h3>
        </IonRow>   

        </IonContent>
      </IonPage>
    );
  };
  
  export default Sobretienda;
  