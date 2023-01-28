import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer } from "react-icons/io5";
import React, { useState ,useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";


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
import { reload } from 'ionicons/icons';



const Tab1= (el:any) => {
  
  const [lati,setLati]=React.useState('')  
  const [long,setLong]=React.useState('')  
  const [refresh, setRefresh] = React.useState(0)
  function refreshPage() {
    window.location.reload();
  }
//mapa mijo
  const options = {
    //enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  const success=(pos:any)=> {
    const crd = pos.coords;
    setLong(crd.longitude)
    setLati(crd.latitude)
  }
  function error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  } 
  navigator.geolocation.getCurrentPosition(success, error, options)
  

//mapear las tiendas de otros
  let history=useHistory();
    const [text, setText] = useState<string>();
    let { ini }:any =useParams();
    const otros=[];
    {for(let i = 7; i < el.data.length; i++) {
      otros[i]=el.data[i]
      
     } }
  
  
  
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
      <IonRow class="buscador">
        <IonCol size="large"className="ion-align-self-center" ><IonInput value={text} placeholder="¿QUE NECESITAS?" onIonChange={e => setText(e.detail.value!)}></IonInput></IonCol>
        <IonCol class="lupa"><BsSearch size="30"></BsSearch></IonCol>
      </IonRow>
     
      {ini==null &&
        <IonRow class="titulo1">
          <h2> Categorias Populares</h2>
        </IonRow>
      }
      
      {ini=="MAS" &&
        <IonRow class="titulo1">
          <h2>Otras Categorias</h2>
        </IonRow>
      }
      
      {ini==null &&
      
      <IonRow class="logos">
      <IonButton href={`tab1/logo/BARES?lat=${lati}`+`&longs=${long}`+`&idcategori=1`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo1" ><IoBeer size="50"></IoBeer></IonCol></IonButton> 
      <IonButton href={`tab1/logo/RESTAURANTES?lat=${lati}`+`&longs=${long}`+`&idcategori=2`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo2"><MdOutlineStorefront size="50"></MdOutlineStorefront></IonCol></IonButton> 
      <IonButton href={`tab1/logo/ESTADEROS?lat=${lati}`+`&longs=${long}`+`&idcategori=3`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo3"><FaBed size="50"></FaBed></IonCol></IonButton> 
      <IonButton href={`tab1/logo/CAFETERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=4`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo4"><FiCoffee size="50"></FiCoffee></IonCol></IonButton> 
      <IonButton href={`tab1/logo/PAPELERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=5`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo5"><FaPencilRuler size="50"></FaPencilRuler></IonCol></IonButton> 
      <IonButton href={`tab1/logo/FERRETERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=6`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo6"><FaBriefcase size="50"></FaBriefcase></IonCol></IonButton> 
      <IonButton href={`tab1/logo/VETERINARIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=7`+`&filter=0`}color="white" expand="full" fill="clear" size='large'><IonCol class="logo7"><MdPets size="50"></MdPets></IonCol></IonButton> 
      <IonButton href="/tab1/MAS" color="white" expand="full" fill="clear" size='large'><IonCol class="logo8"><AiOutlineQuestionCircle size="50"></AiOutlineQuestionCircle></IonCol></IonButton>
      </IonRow>
      }
      {ini=="MAS" &&
        <IonRow class="logoslist">
          <IonList class='listoIni'>
          
          {otros.map((info:any) => {
            
            let url=`tab1/logo/${info.tipocategoria}?lat=${lati}`+`&longs=${long}`+`&idcategori=${info.id}`+`&filter=0`;
            {console.log(url)}
            return(<>
            
            <IonButton href={url} class="blist" color="white" expand="full" fill="clear"  size='large'><p>{info.tipocategoria}</p></IonButton>
            
            
            </>)
          
        })} 
        </IonList>
        </IonRow>
       
      }
      
     
      <IonRow class="titulo2">
        <h2>Tienes Cerca</h2>
      </IonRow>
      <IonRow class="mapa">
        <IonCol class="mapas">
        {lati==undefined &&
          
          <MyComponent refresh={true} reload={true}
          />
          
        }
        {lati!=undefined &&
          
          <MyComponent latitude={lati} Longitude={long} Categorias={''}
          />
          
        }
        
         </IonCol>
 
      </IonRow>
      

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
