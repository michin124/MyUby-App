import {IonSegment,IonSelect, IonSelectOption, IonSegmentButton,IonText, IonContent, IonHeader,IonButton,IonThumbnail , IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer } from "react-icons/io5";
import React, { useEffect, useState } from 'react';import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


import { helphttp } from '../helpers/helphttp';

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


const initialDb=
  {
    
    Correo:"",
    Password:"",
    
      
  }


const LoginForm= () =>{
  const [idConfirm,setIdConfirm]=useState(false)
  const [invalid,setInvalid]=useState('')
 
  const[form,setForm]=useState(initialDb)
  const handlesubmit = (e:any) =>{
    
    e.preventDefault();
    
    if(!form.Password)
    {
      alert("datos incompletos");
      return;
    }
    if(!form.Correo)
    {
      alert("datos incompletos");
      return;
    }
   else{
    let urlConfirm="http://127.0.0.1:8000/Users/UserTramp/"
    ////Confirmar si no hay un usuario con ese face pa

    
    let gus=`${urlConfirm}${form.Correo}/${form.Password}/`;
    helphttp()
    .get(gus).then((res)=>{
        if(!res.err){
          setIdConfirm(res.Valid)
          console.log(res,'aqui')
          if(res.Valid==true)
          {
            localStorage.setItem("UserId", res.UserId.IC);
            window.location.reload();
            window.location.replace('http://localhost:3000/tab1/');
            setInvalid('')
            

          }
          if(res.Valid==false)
          {
            
            setInvalid('invalido')
            

          }
          
   
        }else{
          setIdConfirm(false)
        
        }  
      })
        
    

   }
   
   

    
  }
 
  const handlechange=(e:any)=>{
    setForm({
      
      ...form,[e.target.name]:e.target.value,
     
    })
    
  }

  //filtro encargado del rango para la peticion 
 
  
  const [info,setInfo]:any=useState()
  

  const responseFacebook = (response:any) => {
    
    let urlConfirm="http://127.0.0.1:8000/Users/UserConf/"
    ////Confirmar si no hay un usuario con ese face pa

    
    let gus=`${urlConfirm}${response.userID}`;
    helphttp()
    .get(gus).then((res)=>{
        if(!res.err){
          setIdConfirm(res.Valid)
          console.log(res,'aqui')
          if(res.Valid==true)
          {
            
            window.location.replace(`http://localhost:3000/Register?&succes=${true}&name=${response.name}`+`&email=${response.email}`+`&id=${response.userID}`);
            

          }
          if(res.Valid==false)
          {
            
            localStorage.setItem("UserId", res.UserId.IC);
            window.location.reload();
            window.location.replace('http://localhost:3000/tab1/');
            
            

          }
          
   
        }else{
          setIdConfirm(false)
        
        }  
      })
        
    
    
   
    setInfo(response.profileObj)
    
    
   
    
    
  }

 

  let History=useHistory();
 
  
  const responseGoogleG=(respuesta:any)=>{
    let urlConfirm="http://127.0.0.1:8000/Users/UserConf/"
    ////Confirmar si no hay un usuario con ese google pa
    let gus=`${urlConfirm}${respuesta.googleId}`;
    helphttp()
    .get(gus).then((res)=>{
        if(!res.err){
          setIdConfirm(res.Valid)
          console.log(res,'aqui')
          if(res.Valid==true)
          {
            window.location.replace(`http://localhost:3000/Register?&succes=${true}&name=${respuesta.profileObj.name}`+`&email=${respuesta.profileObj.email}`+`&id=${respuesta.googleId}`);
            
            

          }
          if(res.Valid==false)
          {
            
            localStorage.setItem("UserId", res.UserId.IC);
            window.location.reload();
            window.location.replace('http://localhost:3000/tab1/');
            
            

          }
          
   
        }else{
          setIdConfirm(false)
        
        }  
      })
    
    
    console.log(respuesta)
    setInfo(respuesta.profileObj)
    console.log(info)
    
    
    
  }
  
  const responseGoogleE=(respuesta:any)=>{
    console.log('error')
      
  }
  const clientId="957251710032-hav1c3vgbvnlvqlai24imnpovpkepvpi.apps.googleusercontent.com"
  useEffect(()=>{
    gapi.load("client:auth2",()=>{
      gapi.auth2.init({clientId:clientId})
    })
  },[])
  
  return(
    <IonPage className='bodys'>
      <div id="loginform">
        <FormHeader title="Iniciar sesión" />
        <br />
        <br />
        <label style={{color:'black',marginLeft:'5%'}}>Correo</label>
        <input className='FormIn' type="text" name='Correo' placeholder='Correo registrado'onChange={handlechange} value={form.Correo}/>
        <br />
        <br />
        <label style={{color:'black',marginLeft:'5%'}}>Contraseña</label>
        <input className='FormIn' type="password" name='Password' placeholder='Contraseña'onChange={handlechange} value={form.Password}/>
       
        
        {invalid=='invalido'&&
          <label style={{color:'red',fontSize:'13px'}}>Correo o contraseña no validos</label>
        }
        
        <IonButton style={{marginTop:'5px',width:'70%',marginLeft:'15%',borderRadius:'100px'}} onClick={handlesubmit} id="buttonR" title="Registrar">Entrar</IonButton>
            
        <br />
        
        <label style={{color:'black',marginLeft:'10%'}}>Puedes entrar con:</label>
       
                  <IonRow className='othersM'>
                  <IonCol className='doble' style={{color:'black'}} >
                  <FacebookLogin

                      appId="200639832610056"
                      autoLoad={false}
                      textButton=""
                      icon="fa-facebook"
                      fields="name,email,picture"
                      cssClass='facebookIcon'
                      callback={responseFacebook}/>Facebook
                  </IonCol>

                  <IonCol>
                      <GoogleLogin
                          style={{height:'10px',background:'blue'}}
                          render={renderProps => (
                          <button id='googleIcon' onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={GoogleI} style={{height:'50px',width:'55px',marginBottom:'-5px'}} /> Google</button>
                          )}
                          clientId={clientId}
                          
                          onSuccess={responseGoogleG}
                          onFailure={responseGoogleE}
                          cookiePolicy={'single_host_origin'}
                      />

                  </IonCol>
                  </IonRow>
                  
        <RegisterButton></RegisterButton>
      </div>
    </IonPage>
    
  )
}



const FormHeader = (props:any) => (
  <h2 id="headerTitle">{props.title}</h2>
);



const RegisterButton = (props:any) => (

  <div id="button2" className="rows">
    <IonText class='buttonalert' style={{color:'#222222',widht:'100%',marginLeft:'12.5%'}}>
      Si no te has registrado hazlo aqui
    </IonText>
    <IonButton href='/Register' style={{marginLeft:'1%',marginRight:'1%',marginBottom:'10px'}}> Resgistrate </IonButton>
  </div>
);



export default LoginForm;
