import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const mydatos: React.FC = () => {
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
        <IonRow>
          <h2>Hola NAME</h2>
        </IonRow>
        <IonRow class="fotop1">
          <IonRow class="fotop">
          <CgProfile size="100"></CgProfile>
          </IonRow>
        </IonRow>
        
        
            <IonRow class="MYD">
                <h1>MYDATOS</h1><br /><h2>ID#:</h2>
            </IonRow>

            <IonRow class="MYN">
                <h2>Nombre:</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Correo:</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Numero:</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Ciudad:</h2>
            </IonRow>
       
        
      </IonContent>

        

    </IonPage>
  );
};

export default mydatos;