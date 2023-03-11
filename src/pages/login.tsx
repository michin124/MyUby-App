import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer } from "react-icons/io5";
import React, { useEffect, useState } from 'react';import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";



import MyComponent from '../helpers/maps';
import { FcGlobe} from "react-icons/fc";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineStorefront} from "react-icons/md";

import './Tab1.css';
import { useParams } from 'react-router';
import { Console } from 'console';
import { useHistory, useLocation} from 'react-router';

import {gapi} from 'gapi-script'
import GoogleLogin from 'react-google-login';



function Inicio(){

    
    const clientId="957251710032-hav1c3vgbvnlvqlai24imnpovpkepvpi.apps.googleusercontent.com"
    useEffect(()=>{
      gapi.load("client:auth2",()=>{
        gapi.auth2.init({clientId:clientId})
      })
    },[])
    const responseGoogle=(respuesta:any)=>{
      console.log(respuesta)
        
    }
  return(
    <div>
    
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
    

  )
};

export default Inicio;
