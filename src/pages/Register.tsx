import {IonSegment,IonSelect, IonSelectOption, IonSegmentButton,IonText, IonContent, IonHeader,IonButton,IonThumbnail , IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
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

import { helphttp } from '../helpers/helphttp';

import './login.css';
import { useParams } from 'react-router';
import { Console } from 'console';
import { useHistory, useLocation} from 'react-router';

import {gapi} from 'gapi-script'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



const initialDb=[
  {
    nombre: "",
    foto: "",
    telefono: "",
    correo:"",
    Password:"",
    Ciudad:"",
    Departamento:"",
    Edad:"",
    Genero:"",
      
  }
]

let valid = false;

const RegisterForm= () =>{
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let name=query.get("name");
  let email=query.get("email");
  const initialDb2={
      id:null,
      Nombre: name,
      foto: "",
      telefono: "",
      Correo:email,
      Password:"",
      Ciudad:"",
      Departamento:"",
      Edad:"",
      Genero:"",
      confirm:"",
      imagen:undefined
  };
    const [imagen, setImagen] = useState<File>();
    const[form,setForm]=useState(initialDb2)
    const [db,setdb]=useState(initialDb)
    const[error,setError]=useState(null);
    let urlImg='http://localhost:8000/images/'
    let url="http://127.0.0.1:8000/Users/UserAgg/"
      //crear nuevo registro
  const createData = (data:any) => {
    let api=helphttp();
    data.id=Date.now();
    //para traer el json es una cabecera
      let options={
        body:data,
          headers:{"content-type":"aplication/json"},
      }
      //put en vez de post(funcion que reconoce la base)
      api.post(url,options).then((res)=>{

    
        if(!res.err){
          //db lo conbina con res osea el contenido
          setdb([...db,res]);
          
        }else
        {
          //si res es un error pues lo manifiesta como un mago
          setError(res);
        }
      });
    //let newData=db.map(el =>el.id===data.id?data:el);
    //
  };

  const handlereset = (e:any) =>{
    
    setForm(initialDb2);
    
    
  }
  
  const handlesubmit = (e:any) =>{
    {window.location.reload()}
    e.preventDefault();
    
    if(!form.Password)
    {
      alert("datos incompletos");
      return;
    }
    if(form.id===null)
    {
      
      
      //para traer el json es una cabecera
        
      
        
        createData(form);
        localStorage.setItem("myCat", "Michi");
    }
    
    
   

    
  }
 
  const handlechange=(e:any)=>{
    setForm({
      
      ...form,[e.target.name]:e.target.value,
     
    })
    
  }
  


 
    
    
    //filtro encargado del rango para la peticion 
    let succes=query.get("succes");
    
    const [info,setInfo]:any=useState()
    
  

    const clientId="957251710032-hav1c3vgbvnlvqlai24imnpovpkepvpi.apps.googleusercontent.com"
  useEffect(()=>{
    gapi.load("client:auth2",()=>{
      gapi.auth2.init({clientId:clientId})
    })
  },[])
  
  const responseFacebook = (response:any) => {
    console.log(response);
  }



  let History=useHistory();
 
  
  const responseGoogleG=(respuesta:any)=>{
    
    History.push({search:`&succes=true&name=${respuesta.profileObj.name}`+`&email=${respuesta.profileObj.email}`})
    
    console.log(respuesta)
    setInfo(respuesta.profileObj)
    console.log(info)
    valid=true
    
  }
  
  const responseGoogleE=(respuesta:any)=>{
    console.log('error')
      
  }
  const FormInput = (props:any) => (
    <div className="rows">
       
      <input name={props.name} style={{marginTop:'-25px',marginLeft:'-20px'}} type={'password'} onChange={handlechange} value={props.value} placeholder={props.placeholder}/>
    </div>  
  );
 
    
    return(
      <IonPage className='bodys'>
        <div >
          
          {succes=='true'&&
           
          <div id="Sregister">
            
             <form onSubmit={handlesubmit} >
             
             
               
                <label style={{color:'black',marginLeft:'0%',fontSize:'25px'}}>Hola {name} </label>   
                <br />
                <br /> 
                <label style={{color:'black',marginLeft:'0%',fontSize:'20px'}}>Necesitamos algunos datos adicionales</label> 
                <br />
                <br /> 
                <label style={{color:'black',marginLeft:'5%'}}>¿Cual es tu epoca?</label>
                <IonSelect name='Edad' onIonChange={handlechange} value={form.Edad} placeholder="Edad">
                    <IonSelectOption value="De1825">De 18 a 25 años</IonSelectOption>
                    <IonSelectOption value="De2540">De 25 a 40 años</IonSelectOption>
                    <IonSelectOption value="De4050">De 40 a 50 años </IonSelectOption>
                    <IonSelectOption value="Mas50">Mas de 50 años </IonSelectOption>
                    
                </IonSelect>
                <label style={{color:'black',marginLeft:'5%'}}>Sexo</label>
                <IonSelect name='Genero' onIonChange={handlechange} value={form.Genero} placeholder="Genero">
                    <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                    <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                    <IonSelectOption value="Otro">Otro</IonSelectOption>
                </IonSelect>
                <label style={{color:'black',marginLeft:'5%'}}>¿Donde vives?</label>
                <IonRow>
                    <IonCol>
                        <IonSelect name='Departamento' onIonChange={handlechange} value={form.Departamento} placeholder="Departamento" >
                        <IonSelectOption value="Bogota">Bogota D.C</IonSelectOption>
                            <IonSelectOption value="Cundinamarca">Cundinamarca</IonSelectOption>
                            <IonSelectOption value="Arauca">Arauca</IonSelectOption>
                            <IonSelectOption value="Antioquia">Antioquia</IonSelectOption>
                            <IonSelectOption value="Atlantico">Atlantico</IonSelectOption>
                            <IonSelectOption value="Boyaca">Boyaca</IonSelectOption>
                            <IonSelectOption value="Bolivar">Boyaca</IonSelectOption>
                            <IonSelectOption value="Casanare">Casanare</IonSelectOption>
                            <IonSelectOption value="Caqueta">Caqueta</IonSelectOption>
                            <IonSelectOption value="Cesar">Cesar</IonSelectOption>
                            <IonSelectOption value="Cordoba">Cordoba</IonSelectOption>
                            <IonSelectOption value="Guajira">La Guajira</IonSelectOption>
                            <IonSelectOption value="Huila">Huila</IonSelectOption>
                            <IonSelectOption value="Magdalena">Magdalena</IonSelectOption>
                            <IonSelectOption value="NorteSantander">Norte de Santander</IonSelectOption>
                            <IonSelectOption value="Putumayo">Putumayo</IonSelectOption>
                            <IonSelectOption value="ValleCauca">Valle del Cauca</IonSelectOption>
                            <IonSelectOption value="Santander">Santander</IonSelectOption>
                            <IonSelectOption value="Santander">Santander</IonSelectOption>
                        </IonSelect>

                    </IonCol>
                    <IonCol>
                        <IonSelect name='Ciudad' onIonChange={handlechange} value={form.Ciudad} placeholder="Municipio">
                            <IonSelectOption value="Bogota">Bogota</IonSelectOption>
                            <IonSelectOption value="Medellin">Medellin</IonSelectOption>
                            <IonSelectOption value="Cartagena">Cartagena</IonSelectOption>
                            <IonSelectOption value="Barranquilla">Barranquilla</IonSelectOption>
                            <IonSelectOption value="Villavincencio">Villavincencio</IonSelectOption>
                            <IonSelectOption value="Bucaramanga">Bucaramanga</IonSelectOption>
                            <IonSelectOption value="Buenaventura">Buenaventura</IonSelectOption>
                            <IonSelectOption value="Cali">Cali</IonSelectOption>
                            <IonSelectOption value="Cucuta">Cucuta</IonSelectOption>
                            <IonSelectOption value="Bello">Bello</IonSelectOption>
                            <IonSelectOption value="Tunja">Tunja</IonSelectOption>
                            <IonSelectOption value="Soacha">Soacha</IonSelectOption>
                            <IonSelectOption value="Sogamoso">Sogamoso</IonSelectOption>
                            <IonSelectOption value="Garagoa">Garagoa</IonSelectOption>
                            <IonSelectOption value="Itagui">Itagüí</IonSelectOption>
                            <IonSelectOption value="Envigado">Envigado</IonSelectOption>
                            <IonSelectOption value="Villa de leyva">Villa de leyva</IonSelectOption>
                            <IonSelectOption value="Villao">Villao</IonSelectOption>
                            <IonSelectOption value="Somondoco">Somondoco</IonSelectOption>
                            <IonSelectOption value="Monteria">Monteria</IonSelectOption>
                            <IonSelectOption value="Valledupar">Valledupar</IonSelectOption>
                            <IonSelectOption value="Barichara">Barichara</IonSelectOption>
                            <IonSelectOption value="Ibague">Ibague</IonSelectOption>
                            <IonSelectOption value="AGUADAS">Aguadas</IonSelectOption>
                            <IonSelectOption value="MOMPOX">Mompox</IonSelectOption>
                            <IonSelectOption value="GUADUAS">Guaduas</IonSelectOption>
                            <IonSelectOption value="Soledad">Soledad</IonSelectOption>
                            <IonSelectOption value="Neiva">Neiva</IonSelectOption>
                            <IonSelectOption value="Otro">Otro</IonSelectOption>
                        </IonSelect>

                    </IonCol>
                    
                    
                    
                </IonRow>
                <label style={{color:'black',marginLeft:'5%'}}>Ingresa una contraseña</label>
                <input className='FormIn' type="password" name='Password' placeholder='Contraseña'onChange={handlechange} value={form.Password}/>
                {form.Password!=''&&
                  
                    <IonRow>
                      <label style={{color:'black',marginLeft:'5%',textAlign:'center',marginTop:'10px'}}>Ingresa tu contraseña de nuevo</label>
                      <input className='FormIn' type="password" name='confirm' placeholder='Confirmar Contraseña'onChange={handlechange} value={form.confirm}/>
                
                    </IonRow>
                  
                }
                 <br />
                {form.Password!=''&&
                  form.Password==form.confirm&&
                    <IonButton style={{marginTop:'-15px'}} onClick={handlesubmit} id="buttonR" title="Registrar">Registrar</IonButton>
                }
                {form.Password!=form.confirm&&
                  <IonRow style={{marginTop:'-0px'}}>
                    <label style={{color:'red',fontSize:'13px'}}>Las contraseñas deben ser iguales!!</label>
                    <IonButton  disabled={true} id="buttonR" title="Registrar">Registrar</IonButton>

                  </IonRow>
                  
                }
                {form.Password==''&&
                  form.confirm==''&&

                    
                    <IonRow style={{marginTop:'10px'}}>
                      <label style={{color:'red',fontSize:'13px'}}>Ingresa una contraseña</label>
                      <IonButton disabled={true} id="buttonR" title="Registrar">Registrar</IonButton>

                    </IonRow>
                  
                }
                
                </form>
            </div>

          }
            {succes=='false'&&
                
                <div  id="register">
                    <FormHeader style={{marginBottom:'0px'}} className='tituloR' title="Registrate" />
            
                    <label style={{color:'black',marginLeft:'5%'}}>Te pedes registar con:</label>
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

            }
            {succes==undefined&&
        
              <div  id="register">
                  <FormHeader style={{marginBottom:'0px'}} className='tituloR' title="Registrate" />

                  <label style={{color:'black',marginLeft:'5%'}}>Te pedes registar con:</label>
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
            }
        </div>
        {console.log(form)}
      </IonPage>
      
    )
    
  
}


const FormHeader = (props:any) => (
  <h2 id="headerTitle">{props.title}</h2>
);



const RegisterButton = (props:any) => (

  <div id="button2" className="rows">
    <IonText class='buttonalert2' style={{color:'#222222',widht:'10px'}}>
      Si ya estas registrado entra aqui
    </IonText>
    <IonButton href='/log' style={{marginLeft:'1%',marginRight:'1%'}}> Iniciar Sesion </IonButton>
  </div>
);








export default RegisterForm;
