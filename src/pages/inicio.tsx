import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import Crud from '../components/Crud';
import CrudForm from '../components/crudform';

import { helphttp } from '../helpers/helphttp';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import CrudApp from '../components/Crud';
import Crudapi from '../components/crudapi';

//import 'bootstrap'

const initialDb=[
  {
    Nombre: "",
    foto: "",
    telefono: "",
    Correo:"",
    Password:"",
    Ciudad:"",
    Departamento:"",
    Edad:"",
    Genero:"",
    IC:""
      
  }
]

const Inicio: React.FC = () => {
  const [db,setdb]=useState(initialDb)
  const UserId = localStorage.getItem("UserId");
  let urlUser="http://127.0.0.1:8000/Users/UserAgg/"
  ////apielegantes

  useEffect(()=>{
    let gus=`${urlUser}${UserId}`;
    helphttp()
    .get(gus).then((res)=>{
        if(!res.err){
          setdb(res.User)
          
          
        }else{
          setdb([])
        
        }  
      })
      
  },[urlUser]);
  
  return (
    
    
        <IonPage>
          
        <IonHeader class='header'>
          <IonRow class='header2'>
            <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
          </IonRow>  
        </IonHeader>
    
    
          <IonContent fullscreen>
           
            <hr />
            
            <hr />
            <LoadScript googleMapsApiKey="">
                <Crudapi id={db}/>
            </LoadScript>
            

          </IonContent>
        </IonPage>
      );
};

export default Inicio;


