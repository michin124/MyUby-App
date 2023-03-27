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
    id:0,
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
const Tab3: React.FC = () => {
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

  console.log(db[0].id)
  return (
    <IonPage>
      <IonHeader class='header'>
        <IonRow class='header2'>
        
        <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
        </IonRow>  
      </IonHeader>


      <IonContent style={{backgroundColor:'red'}} class='datos' fullscreen>
        <br />
        <IonRow style={{marginLeft:'2%'}}>
          <IonTitle>Hola</IonTitle>
        
        </IonRow>
        <IonRow style={{marginLeft:'2%',marginTop:'0'}}>
        <IonTitle><b> {db[0].Nombre}</b></IonTitle>
          
        </IonRow>
      
        <br />
        <IonRow className='cuadroPage'>
          <IonRow style={{alignItems:'Left'}}>
            <label style={{marginLeft:'5%', fontSize:'21px',color:'#e15669',marginBottom:'2%',marginTop:'1%'}} ><b> My cuenta </b></label>
            <br />
            <IonButton class="DatosB" href={`/mydatos/`} color="white"  style={{fontSize:'22PX',color:'#ff5c7b'}}>MYDATOS</IonButton>
            <IonButton class="DatosB" href={`/inicio?&idUs=${db[0].id}`} color="white"><label> Agregar una tienda </label> </IonButton>
            <IonButton class="DatosB" href="/AggEventos" color="white"><label> Agregar un evento </label> </IonButton>
            <IonButton style={{color:'#2196f3'}} class="DatosB" href={`/mytiendas/`} color="white"><label> Mis tiendas y/o eventos </label> </IonButton>
            <IonButton class="DatosB" href="/log" color="white" >login</IonButton>
            <label style={{marginLeft:'5%', fontSize:'20px',color:'#e15669',marginBottom:'2%',marginTop:'1%'}}> <b> Soporte</b></label>
            <br />
            
            <IonButton class="DatosB" href="/necesitasa" color="white" >Reportar un problema</IonButton>
            <label style={{marginLeft:'5%', fontSize:'20px',color:'#e15669',marginBottom:'2%',marginTop:'1%'}}> <b>Informacion</b> </label>  
            <br />
            <IonButton class="DatosB" href="/politicasdeprivacidad" color="white">Politicas de privacidad</IonButton>
            <IonButton class="DatosB" href="/terminos" color="white" >Terminos y condiciones</IonButton>
            <IonButton class="DatosB" href="/terminos" color="white" >Politicas de tratamiento de datos</IonButton>
            <br />
            <br />
            <IonButton style={{color:'red'}} class="DatosB" href="/cerrarsesion" color="white"><b> CERRAR SESION</b></IonButton>
          </IonRow>

        </IonRow>
        
      </IonContent>



    </IonPage>
  );
};

export default Tab3;
