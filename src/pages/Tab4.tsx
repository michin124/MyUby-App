import { IonContent, IonHeader,IonButton, IonPage,IonRefresherContent,IonRefresher, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption,IonSegment, IonSegmentButton, IonIcon,RefresherEventDetail  } from '@ionic/react';

import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { useParams } from 'react-router';
import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {FaPercentage} from "react-icons/fa";
import { useHistory, useLocation} from 'react-router';
import { Console } from 'console';
import { helphttp } from '../helpers/helphttp';
import { HiReceiptPercent} from "react-icons/hi2";
import { BsPatchCheckFill}from "react-icons/bs";
import { image } from 'ionicons/icons';
import EvenMap from '../helpers/mapsEvent';

import { IoBeer } from "react-icons/io5";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineStorefront} from "react-icons/md";

const initialDb=[
  {
    id: 0,
    nombretienda: "",
    foto: "",
    telefono: "",
    direccion: "",
    horario: "",
    domicilio: "",
    parqueadero:"" ,
    especialidad: ""
      
  }
]


const Tab4= (el:any) => {
  const [lati,setLati]=React.useState(-1)  
  const [long,setLong]=React.useState(-1) 
  const [dbprom0,setdbprom0]=useState(initialDb)
  const [dbdesc0,setdbdesc0]=useState(initialDb)
  const [filter, setCurrentFilter] = useState('');
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  
  let Nfiltro1=query.get("namefiltro1")||"Todas";
  let Nfiltro2=query.get("namefiltro2")||"Seleccionar";

  let UrlI='http://127.0.0.1:8000/media/images/'
  ///ruta imagenes
  
  let cuenta2=dbdesc0?.length || 0;
  let cuenta3=dbprom0?.length || 0;
  let history=useHistory();
  const [range, setCurrentRange] = useState('');
  const [fil, setfiltro] = useState('Descuentos');
  const[error,setError]=useState(null);
  let idcategori=query.get("idcategori");
  const otrosDesc=[];
  const otrosProm=[];
  let cuenta
  let filtro=1
  const otros=[];
  let urlcercaDesc="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  let urlcercaPromo="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  function onCordOkay(pos:any){
    const crd = pos.coords;
    console.log(crd)
    setLong(crd.longitude);
    setLati(crd.latitude);
    let gun=`${urlcercaPromo}${lati}/${long}/2/${filter}/`;
      helphttp()
      .get(gun).then((res)=>{
        if(!res.err){
          
          setdbprom0(res.pruebass)
          
          setError(null)
        }else{
          setdbprom0([])
          
          setError(res)
          
        }  
      })
    let gus=`${urlcercaDesc}${lati}/${long}/3/${filter}/`;
    helphttp()
    .get(gus).then((res)=>{
      if(!res.err){
        setdbdesc0(res.pruebass)
        setError(null)
      }else{
        setdbdesc0([])
        setError(res)
      }  
    })
  }
  const options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge:500,
    frequency:60000,
  };
  {if(dbprom0?.length>1){
    for(let i = 0; i < (dbprom0?.length)/2; i++) {
      otrosProm[i]=dbprom0[i]
    }
    } 
  }
  
  {if(dbdesc0?.length>1){
    for(let i = 0; i < (dbdesc0?.length)/2; i++) {
      otrosDesc[i]=dbdesc0[i]
    }
    } 
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(onCordOkay,function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)},options)

  },[urlcercaPromo]);
  
  if(range=='')
  {
    if(Nfiltro1!=undefined)
    {
      setCurrentRange(Nfiltro1)
    }
    
  }
  
  if(filter=='')
  {
    if(Nfiltro2!=undefined)
    {
      setCurrentFilter(Nfiltro2)
    }
    
  }
  
      
    
  
  const pushRange = (msg: any) => {
    setCurrentRange(msg);
    window.location.reload()
    
  };
  const pushFilt = (msg: any) => {
    setCurrentFilter(msg); 
  };


  if(range=="Todas"){
   
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${"0"}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange('l')
  }
  if(range=="De 1 a 3km"){    
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${1}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="De 3 a 6km"){
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${2}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="De 6 a 10km"){  
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${3}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="Mas de 10km"){
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${4}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  if(range=="Menos de 1km"){
    history.push({search:`?lat=${lati}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${5}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
 
  


  
  if(filter=="seleccionar"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < (el.data?.length)/2; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }

  if(filter=="Seleccionar"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < (el.data?.length)/2; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Todas"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>1){
      for(let i = 0; i < (el.data?.length)/2; i++) {
        otros[i]=el.data[i]
      }
     } 
    }
    
    
  }
  if(filter=="Promociones"){
    
    filtro=2
    cuenta=el.dataprom?.length || 0;
    {if(el.dataprom?.length>1){
      for(let i = 0; i < (el.dataprom?.length)/2; i++) {
        otros[i]=el.dataprom[i]
      }
     } 
    }
    
    
  }
  if(filter=="Descuentos"){
    
    filtro=3
    cuenta=el.datadesc?.length || 0;
    {if(el.datadesc?.length>1){
      for(let i = 0; i < (el.datadesc?.length)/2; i++) {
        otros[i]=el.datadesc[i]
      }
     } 
    }
    
    
  }
  if(filter=="Domicilios"){
    
    filtro=4
    cuenta=el.dbdom0?.length || 0;
    {if(el.dbdom0?.length>1){
      for(let i = 0; i < (el.dbdom0?.length)/2; i++) {
        otros[i]=el.dbdom0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Menoresprecios"){
    
    filtro=5
    cuenta=el.dbpresbaj0?.length || 0;
    {if(el.dbpresbaj0?.length>1){
      for(let i = 0; i < (el.dbpresbaj0?.length)/2; i++) {
        otros[i]=el.dbpresbaj0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Preciosjustos"){
    
    filtro=6
    cuenta=el.dbpresjus0?.length || 0;
    {if(el.dbpresjus0?.length>1){
      for(let i = 0; i < (el.dbpresjus0?.length)/2; i++) {
        otros[i]=el.dbpresjus0[i]
      }
     } 
    }
    
    
  }
  if(filter=="PetFriendly"){
    
    filtro=7
    cuenta=el.dbpetf0?.length || 0;
    {if(el.dbpetf0?.length>1){
      for(let i = 0; i < (el.dbpetf0?.length)/2; i++) {
        otros[i]=el.dbpetf0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Elegantes"){
    
    filtro=8
    cuenta=el.dbelegs0?.length || 0;
    {if(el.dbelegs0?.length>1){
      for(let i = 0; i < (el.dbelegs0?.length)/2; i++) {
        otros[i]=el.dbelegs0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Joyas"){
    
    filtro=9
    cuenta=el.dbjoyas0?.length || 0;
    {if(el.dbjoyas0?.length>1){
      for(let i = 0; i < (el.dbjoyas0?.length)/2; i++) {
        otros[i]=el.dbjoyas0[i]
      }
     } 
    }
    
    
  }
  
 

  return (
   
    <IonPage>
      
      
      <IonHeader class='header'>
      <IonRow class='header2'>
      <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
      </IonRow>  
      </IonHeader>
      

      <IonContent fullscreen>
      <IonRow class='MapaRow'>
        <IonRow class="mapa">
          <IonCol class="mapasEve">
            <EvenMap latitude={lati} Longitude={long} Categorias={''}/>
          
          </IonCol>
  
        </IonRow>

      </IonRow>
      <IonRow>
        <IonRow className='logosRow'>
          <IonButton href={`tab1/logo/BARES?lat=${lati}`+`&longs=${long}`+`&idcategori=1`+`&filter=0`} color="white" expand="full" fill="clear" size='large' ><IonCol class="logo" ><IoBeer size="50"></IoBeer><b className='Namelogo'>Bares</b></IonCol></IonButton> 
          <IonButton href={`tab1/logo/RESTAURANTES?lat=${lati}`+`&longs=${long}`+`&idcategori=2`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><MdOutlineStorefront size="50"></MdOutlineStorefront><b className='Namelogo'>Restaurantes</b></IonCol></IonButton> 
          <IonButton href={`tab1/logo/ESTADEROS?lat=${lati}`+`&longs=${long}`+`&idcategori=3`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FaBed size="40"></FaBed><b className='Namelogo'>Estaderos</b></IonCol></IonButton> 
          <IonButton href={`tab1/logo/CAFETERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=4`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FiCoffee size="40"></FiCoffee><b className='Namelogo'>Cafeterias</b></IonCol></IonButton> 
          <IonButton href={`tab1/logo/PAPELERIAS?lat=${lati}`+`&longs=${long}`+`&idcategori=5`+`&filter=0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FaPencilRuler size="40"></FaPencilRuler><b className='Namelogo'>Papelerias</b></IonCol></IonButton> 
        </IonRow>
        
      </IonRow>
      <IonRow class='selector'>
          <IonCol className='colFiltertwo'>
            <IonCol >
              <IonLabel>Eventos con:</IonLabel>
            </IonCol>
            <IonSelect placeholder={Nfiltro2} className='filtro2' onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
              <IonSelectOption className='select' value="Seleccionar" >Todas</IonSelectOption>
              <IonSelectOption className='select' value="Gratis">Entrada gratis</IonSelectOption>
              <IonSelectOption className='select' value="Descuentos" >Descuentos</IonSelectOption>
              <IonSelectOption className='select' value="Promociones" >Promociones</IonSelectOption>
              <IonSelectOption className='select' value="Domicilios">Domicilios</IonSelectOption>
              <IonSelectOption className='select' value="Menoresprecios" >Menores Precios</IonSelectOption>
              <IonSelectOption className='select' value="PetFriendly">PetFriendly</IonSelectOption>
              <IonSelectOption className='select' value="Joyas">Joyas</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol className='colFilterOne'>
            <IonCol >
              <IonLabel>Rango:</IonLabel>
            </IonCol>
            
            <IonSelect placeholder={Nfiltro1} className='filtro1' ok-text="Okay" onIonChange={(e) => pushRange(`${e.detail.value}`)}>
              <IonSelectOption className='select' value="Todas">Todas</IonSelectOption>
              <IonSelectOption className='select' value="Menos de 1km">Menos de 1km</IonSelectOption>
              <IonSelectOption className='select' value="De 1 a 3km">De 1 a 3km</IonSelectOption>
              <IonSelectOption className='select' value="De 3 a 6km">De 3 a 6km</IonSelectOption>
              <IonSelectOption className='select' value="De 6 a 10km">De 6 a 10km</IonSelectOption>
              <IonSelectOption className='select' value="Mas de 10km">Mas de 10km</IonSelectOption>
              
            </IonSelect>
          </IonCol>
          
          
         
          
          
  
  
        </IonRow>
      
      </IonContent>

    </IonPage>
  );
};




export default Tab4;
