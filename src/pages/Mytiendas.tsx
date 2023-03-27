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

const Mytiendas= () => {
    console.log('au')
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
      <IonRow style={{marginLeft:'2%',marginTop:'10PX'}}>
          <IonTitle>Hola</IonTitle>
        
        </IonRow>
        <IonRow style={{marginLeft:'2%'}}>
        <IonTitle><b> {db[0].Nombre}</b></IonTitle>
        <IonRow style={{marginLeft:'0%',marginTop:'0'}} >
            <br /><IonTitle>ID#:{db[0].IC}</IonTitle>
        </IonRow>
        </IonRow>
        <br />
        <br />
        <IonRow>
        <IonTitle style={{fontSize:'20px',borderBottom:' 3px dotted #e15669',borderTop:' 3px dotted #dadadaef'}}>Estas son tus tiendas</IonTitle>


        </IonRow>
        <br />
        <IonRow>
        <IonTitle style={{fontSize:'20px',borderBottom:' 3px dotted #e15669',borderTop:' 3px dotted #dadadaef'}}>Estos son tus eventos</IonTitle>


        </IonRow>
        
        
        
            

            
       
        
      </IonContent>

        

    </IonPage>
  );
};

export default Mytiendas;