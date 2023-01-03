import { IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer, IoNavigate} from "react-icons/io5";
import React, { useState } from 'react';

import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {ImLocation}from "react-icons/im"
import './tienda.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { search } from 'ionicons/icons';

const Tienda= (el:any=0) => {
  
  let history=useHistory(); 
  let cuenta=el.data2?.length || 0;
  
  let {nombretienda,foto,telefono,direccion,horario,domicilio,parqueadero,especialidad,id}=el.data[0];
  let url1=`/productostienda?idtienda=${el.idtienda}`
  let url2=`/infotienda?idtienda=${el.idtienda}`
  
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
        <IonRow class='fototienda'>

        </IonRow>
        <IonRow class='estrellastienda'>
        <RiStarSFill size="40"></RiStarSFill><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine><RiStarSLine size="40"></RiStarSLine>
        </IonRow>
        <IonRow class='nombretienda'>
          <h2>{nombretienda}</h2>
        </IonRow>


        <IonRow class='botonestienda'>

          <IonButton class="productostienda" href={url1} color="white" expand="full" fill="clear" size='large'> <a><h3>PRODUCTOS</h3></a></IonButton>
          <IonButton class="infotienda"  href={url2} color="white" expand="full" fill="clear" size='large'> <h3 >INFO TIENDA</h3></IonButton>  
        </IonRow>
        
  
      <IonRow class="categoria">
      {cuenta>0 ?(el.data2.map((info:any) => {
      
        return(<>
        
        <IonCol class="tcate1" ><IonRow ><IonButton href={url1} className='fototiendas' color="white" expand="full" fill="clear" size='large'></IonButton></IonRow><IonRow  class="nombre">{info.nombreproducto}</IonRow></IonCol> 
        </>)
      })):(       
        <h2></h2>
      )}

      
      </IonRow>

        <IonRow class='vamos'>
          <IonButton class="vamosb" href="vamos" color="white" expand="full" fill="clear" size='large'><IonCol class="logovamos" ><ImLocation size="53"></ImLocation><h3>VAMOS</h3></IonCol></IonButton> 

        </IonRow>
        <IonRow class='abajo2'>

        </IonRow>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tienda;
  