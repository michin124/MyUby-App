import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';




import { helphttp } from '../helpers/helphttp';
import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";

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

const Mydatos: React.FC = () => {

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
            console.log(res)
            
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
        <IonRow>
          <h2>Hola  {db[0].Nombre}</h2>
        </IonRow>
        <IonRow class="fotop1">
          <IonRow class="fotop">
          <CgProfile size="100"></CgProfile>
          </IonRow>
        </IonRow>
        
        
            <IonRow class="MYD">
                <h1>MYDATOS</h1><br /><h2>ID#:{db[0].IC}</h2>
            </IonRow>

            <IonRow class="MYN">
                <h2>Nombre: {db[0].Nombre}</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Correo: {db[0].Correo}</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Sexo: {db[0].Genero}</h2>
            </IonRow>
            <IonRow class="MYN">
                <h2>Ciudad: {db[0].Ciudad}</h2>
            </IonRow>
       
        
      </IonContent>

        

    </IonPage>
  );
};

export default Mydatos;