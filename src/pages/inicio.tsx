import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import Crud from '../components/Crud';
import CrudForm from '../components/crudform';


import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import CrudApp from '../components/Crud';
import Crudapi from '../components/crudapi';

//import 'bootstrap'

const inicio: React.FC = () => {
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
           
            <hr />
            
            <hr />
            <LoadScript googleMapsApiKey="AIzaSyAoKzza6IcVFgGB8tYVQDL1PaG1eQXAez4">
                <Crudapi/>
            </LoadScript>
            

          </IonContent>
        </IonPage>
      );
};

export default inicio;


