import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState ,useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { IoBeer } from "react-icons/io5";
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
import { IonSearchbar } from '@ionic/react';

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
    enableHighAccuracy: true,
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
      {/* <IonCol class="x"><FcGlobe size="50"></FcGlobe></IonCol>
      <IonCol class="x2"><h2>ADRESS</h2></IonCol> */}
      <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
      </IonRow>  
      </IonHeader>


      <IonContent fullscreen>
      <IonSearchbar placeholder="Buscar" animated={true} showCancelButton="focus" class='buscador'></IonSearchbar>
     
      {ini==null &&
        <IonRow class="titulo1">
          <h3><b>Categorias populares:</b></h3>
        </IonRow>
      }
      
      {ini=="MAS" &&
        <IonRow class="titulo1">
           <h3><b>Otras categorias:</b></h3>
        </IonRow>
      }
      
      {ini==null &&
      
      <IonRow class="logos">
        <IonButton href={`tab1/logo/BARES?lat=${lati}`+`&longs=${long}`+`&idcategori=1`+`&filter=0`} color="white" expand="full" fill="clear" size='large' ><IonCol  class="logoI" ><IoBeer size="45"></IoBeer><b className='Namelogo'>Bares</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/RESTAURANTES?lat=${lati}`+`&longs=${long}`+`&idcategori=2`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><MdOutlineStorefront size="45"></MdOutlineStorefront><b className='Namelogo'>Restaurantes</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/ESTADEROS?lat=${lati}`+`&longs=${long}`+`&idcategori=3`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><FaBed size="45"></FaBed><b className='Namelogo'>Estaderos</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/CAFETERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=4`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><FiCoffee size="45"></FiCoffee><b className='Namelogo'>Cafeterias</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/PAPELERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=5`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><FaPencilRuler size="39"></FaPencilRuler><b className='Namelogo'>Papelerias</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/FERRETERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=6`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><FaBriefcase size="40"></FaBriefcase><b className='Namelogo'>Ferreterias</b></IonCol></IonButton> 
        <IonButton href={`tab1/logo/VETERINARIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=7`+`&filter=0`}color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><MdPets size="40"></MdPets><b className='Namelogo'>Veterinarias</b></IonCol></IonButton> 
        <IonButton href="/tab1/MAS" color="white" expand="full" fill="clear" size='large'><IonCol class="logoI"><AiOutlineQuestionCircle size="40"></AiOutlineQuestionCircle><b className='Namelogo'>Otras</b></IonCol></IonButton>
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
      <b className='Tit2'>Tienes cerca:</b>
      </IonRow>
      <IonRow class='MapaRow1'>
        <IonRow class="mapa1">
          <IonCol class="mapas1">
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

      </IonRow>
      
      

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
