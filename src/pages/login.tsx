import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer } from "react-icons/io5";
import React, { useEffect, useState } from 'react';import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";



import GoogleI from "../images/google.png"
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

import './login.css';
import { useParams } from 'react-router';
import { Console } from 'console';
import { useHistory, useLocation} from 'react-router';

import {gapi} from 'gapi-script'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class LoginForm extends React.Component{
  render(){
    return(
      <IonPage className='bodys'>
        <div id="loginform">
          <FormHeader title="Iniciar sesión" />
          <Form />
          <label style={{color:'black',marginLeft:'10%'}}>Puedes entrar con:</label>
          <OtherMethods />
        </div>
      </IonPage>
      
    )
  }
}


const FormHeader = (props:any) => (
  <h2 id="headerTitle">{props.title}</h2>
);
const Form = (props:any) => (
  <div>
    <FormInput description="Correo" placeholder="Ingresa tu correo" type="text" />
    <FormInput description="Contraseña" placeholder="Ingresa tu contraseña" type="password"/>
    <FormButton title="Entrar"/>
  </div>
);

const FormInput = (props:any) => (
  <div className="rows">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);
const FormButton = (props:any) => (
  <div id="button" className="rows">
    <button>{props.title}</button>
  </div>
);


function OtherMethods (props:any) {
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
  <div className='othersM'>
    <IonCol><FacebookLogin
  appId="200639832610056"
  autoLoad={false}
  textButton=""
  icon="fa-facebook"
  fields="name,email,picture"
  cssClass='facebookIcon'
  callback={responseFacebook} /></IonCol>
    
    <IonCol>
    <GoogleLogin
      style={{height:'10px',background:'blue'}}
      render={renderProps => (
        <button id='googleIcon' onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={GoogleI} style={{height:'45px',width:'45px',marginBottom:'-5px'}} /></button>
      )}
      clientId={clientId}
      
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

    </IonCol>
    
  
</div>)
};




const responseFacebook = (response:any) => {
  console.log(response);
}
const Facebook = (props:any) => (
  <FacebookLogin
    appId="200639832610056"
    autoLoad={false}
    textButton=""
    icon="fa-facebook"
    fields="name,email,picture"
    
    callback={responseFacebook} />
);

const Twitter = (props:any) => (
  <a href="#" id="twitterIcon"></a>
);

const Google = (props:any) => (
  <a href="#" id="googleIcon"></a>
);

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
      <FacebookLogin
    appId="200639832610056"
    autoLoad={false}
    textButton=""
    icon="fa-facebook"
    fields="name,email,picture"
    
    callback={responseFacebook} />,
    
    <GoogleLogin
    clientId={clientId}
    buttonText=""
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
    

  )
};

export default LoginForm;
