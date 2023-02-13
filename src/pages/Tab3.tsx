import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class='header'>
      <IonRow class='header2'>
      
      <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
      </IonRow>  
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          <h2>Hola NAME</h2>
        </IonRow>
        <IonRow class="fotop1">
          <IonRow class="fotop">
          <CgProfile size="100"></CgProfile>
          </IonRow>
        </IonRow>
        
        <IonRow class='datos'>
        <IonButton class="mydatos" href="/mydatos" color="white" expand="full" fill="clear" size='large'><h1>MYDATOS</h1></IonButton>
        <IonButton class="configuracion" href="/configuracion" color="white" expand="full" fill="clear" size='large'><p>CONFIGURACION</p></IonButton>
        <IonButton class="tengounatienda" href="inicio" color="white" expand="full" fill="clear" size='large'><p>TENGO UNA TIENDA</p></IonButton>
        <IonButton class="politicasdeprivacidad" href="/politicasdeprivacidad" color="white" expand="full" fill="clear" size='large'><p>POLITICAS DE PRIVACIDAD</p></IonButton>
        <IonButton class="terminos" href="/terminos" color="white" expand="full" fill="clear" size='large'><p>TERMINOS Y CONDICIONES</p></IonButton>
        <IonButton class="necesitasa" href="/necesitasa" color="white" expand="full" fill="clear" size='large'><p>¿NECESITAS AYUDA?</p></IonButton>
        <IonButton class="cerrarsesion" href="/cerrarsesion" color="white" expand="full" fill="clear" size='large'><p>CERRAR SESION</p></IonButton>
        </IonRow>
      </IonContent>



    </IonPage>
  );
};

export default Tab3;
