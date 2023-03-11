import { IonContent, IonHeader,IonButton, IonPage,IonRefresherContent,IonRefresher, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption,IonSegment, IonSegmentButton, IonIcon,RefresherEventDetail, IonSlide, IonSlides  } from '@ionic/react';

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
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { CgLayoutGridSmall } from "react-icons/cg";
import { IoBeer } from "react-icons/io5";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineStorefront} from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Navigation } from 'swiper'



const initialDb=[
  {
    id: 0,
    nombreEvento: -0.0,
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
  const [filter, setCurrentFilter] = useState('');

  //variables para filtros
  const [dbcer0,setdbcer0]=useState(initialDb)
  const [dbprom0,setdbprom0]=useState(initialDb)
  const [dbdesc0,setdbdesc0]=useState(initialDb)
  const [dbpresbaj0,setdbpresbaj0]=useState(initialDb)
  const [dbpresjus0,setdbpresjus0]=useState(initialDb)
  const [dbjoyas0,setdbjoyas0]=useState(initialDb)
  const [dbpetf0,setdbpetf0]=useState(initialDb)
  const [dbgrat0,setdbgrat0]=useState(initialDb)

  //variables distancia
  const [dbdis,setdbdis]=useState(initialDb)
  const [dbcerdis0,setdbcerdis0]=useState(initialDb)
  const [dbpromdis0,setdbpromdis0]=useState(initialDb)
  const [dbdescdis0,setdbdescdis0]=useState(initialDb)
  const [dbjoyasdis0,setdbjoyasdis0]=useState(initialDb)
  const [dbpetfdis0,setdbpetfdis0]=useState(initialDb)
  const [dbgratdis0,setdbgratdis0]=useState(initialDb)


  let {search}=useLocation();
  let query=new URLSearchParams(search);
  //numero de filtro
  
  let { filterN }:any =useParams()||query.get("filtroN");
  let Nfiltro1=query.get("namefiltro1")||"Todas";
  let Nfiltro2=query.get("namefiltro2")||"Seleccionar";
 
  let UrlI='http://127.0.0.1:8000/media/images/'
  ///ruta imagenes
  let filters=query.get("filter")||0
  let cuenta2=dbdesc0?.length || 0;
  let cuenta3=dbprom0?.length || 0;
  let history=useHistory();
  const [range, setCurrentRange] = useState('');
  const [fil, setfiltro] = useState('Descuentos');
  const[error,setError]=useState(null);
  let idcategori=query.get("idcategori")||0;
  let count=0;
  let numero;
  let cuenta=0
  let filtro=1
  const dis:any=[];
  const otros=[];
  let urlcercaDesc="http://127.0.0.1:8000/Eventos/EventoDirCatO/"
  let urlcercaPromo="http://127.0.0.1:8000/Eventos/EventoDirCatO/"
  let urlCerca="http://127.0.0.1:8000/Eventos/EventoDirCat/"
  let urlcercaPresbaj="http://127.0.0.1:8000/Eventos/EventoDirCatDest/"
  let urlcercaPresjus="http://127.0.0.1:8000/Eventos/EventoDirCatDest/"
  let urlcercajoyas="http://127.0.0.1:8000/Eventos/EventoDirCatJoy/"
  let urlpetf="http://127.0.0.1:8000/Eventos/EventoDirCatPet/"
  let urlgratis="http://127.0.0.1:8000/Eventos/EventoDirCatGratis/"
  function ActualPosition(pos:any){
    
    navigator.geolocation.getCurrentPosition(success,function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)},options)
    window.location.reload()
  }
  
  const success=(pos:any)=> {
    const crd = pos.coords;
    setLong(crd.longitude)
    setLati(crd.latitude)
    console.log(lati,long)
  }
  function onCordOkay(pos:any){
    if(filterN==undefined)
    {
      filterN=0;
    }
    const crd = pos.coords;
    let long=crd.longitude
    let lati=crd.latitude
    setLati(lati)
    setLong(long)
    //apiprom
    let gun=`${urlcercaPromo}${lati}/${long}/${filterN}/2/${filters}/`;
    helphttp()
    .get(gun).then((res)=>{
      if(!res.err){
        setdbprom0(res.pruebass)
        setdbpromdis0(res.distancia)      
        setError(null)
      }else{
        setdbprom0([])
        setdbpromdis0([])
        setError(res)
        
      }  
    })
    //apicerca
    let guno=`${urlCerca}${lati}/${long}/${filterN}/${filters}/`;
    helphttp()
    .get(guno).then((res)=>{
        if(!res.err){
          setdbcer0(res.companies)
          setdbcerdis0(res.distancia)
          setError(null)
        }else{
          setdbcer0([])
          setdbcerdis0([])
          setError(res)
        }  
    })
    //apidescuentos
    let guDesc=`${urlcercaDesc}${lati}/${long}/${filterN}/3/${filters}/`;
    helphttp()
    .get(guDesc).then((res)=>{
        if(!res.err){
          setdbdesc0(res.companies)
          setdbdescdis0(res.distancia)
          setError(null)
        }else{
          setdbdesc0([])
          setdbdescdis0([])
          setError(res)
        }  
      })
    
  ////apijoyas
  let guJoy=`${urlcercajoyas}${lati}/${long}/${filterN}/1/${filters}/`;
  console.log(guJoy)
  helphttp()
  .get(guJoy).then((res)=>{
      if(!res.err){
        setdbjoyas0(res.companies)
        setdbjoyasdis0(res.distancia)
        setError(null)
      }else{
        setdbjoyas0([])
        setdbjoyasdis0([])
        setError(res)
      }  
    })
  /////apigratis
  let guGratis=`${urlgratis}${lati}/${long}/${filterN}/1/${filters}/`;
  console.log(guGratis)
  helphttp()
  .get(guGratis).then((res)=>{
      if(!res.err){
        setdbgrat0(res.companies)
        console.log(res)
        setdbgratdis0(res.distancia)
        setError(null)
      }else{
        setdbgrat0([])
        setdbgratdis0(res.distancia)
        setError(res)
      }  
    })
  
  /////apipetfriend
  let guPet=`${urlpetf}${lati}/${long}/${filterN}/1/${filters}/`;
  console.log(guPet)
  helphttp()
  .get(guPet).then((res)=>{
      if(!res.err){
        setdbpetf0(res.companies)
        setdbpetfdis0(res.distancia)
        
        setError(null)
      }else{
        setdbpetf0([])
        setdbpetfdis0(res.distancia)
        setError(res)
      }  
    })
  }
  const options = {
    enableHighAccuracy:true,
    timeout:6000,
    maximumAge:0,
  };
  


  setTimeout(ActualPosition, 600000)
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
    
  
  if(count==4){
    count=0;
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
    cuenta=dbcer0?.length || 0;
    {if(dbcer0?.length>=1){
      for(let i = 0; i < (dbcer0?.length); i++) {
        otros[i]=dbcer0[i]
        dis[i]=dbcerdis0[i] 
      }
     } 
      
    }
    
  }
  if(filter=="Seleccionar"){
    
    let o=0
    filtro=1
    cuenta=dbcer0?.length || 0;
    {if(dbcer0?.length>=1){
      for(let i = 0; i < (dbcer0?.length); i++) {
        otros[i]=dbcer0[i]    
        dis[i]=dbcerdis0[i]

      }
     } 
      
    }
    
    
    
  }
  if(filter=="Todas"){
    
    
    filtro=1
    cuenta=dbcer0?.length || 0;
    {if(dbcer0?.length>=1){
      for(let i = 0; i < (dbcer0?.length); i++) {
        otros[i]=dbcer0[i]
        dis[i]=dbcerdis0[i] 
      }
     } 
      
    }
    
      
    
    
    
  }
  if(filter=="Promociones"){
    
    filtro=2
    cuenta=dbprom0?.length || 0;
    {if(dbprom0?.length>=1){
      for(let i = 0; i < (dbprom0?.length); i++) {
        otros[i]=dbprom0[i]
        dis[i]=dbpromdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Descuentos"){
    
    filtro=3
    cuenta=dbdesc0?.length || 0;
    {if(dbdesc0?.length>=1){
      for(let i = 0; i < (dbdesc0?.length); i++) {
        otros[i]=dbdesc0[i]
        dis[i]=dbdescdis0[i] 

      }
     } 
    }
    
    
  }
  
  if(filter=="PetFriendly"){
    
    filtro=4
    cuenta=dbpetf0?.length || 0;
    {if(dbpetf0?.length>=1){
      for(let i = 0; i < (dbpetf0?.length); i++) {
        otros[i]=dbpetf0[i]
        dis[i]=dbpetfdis0[i] 
      }
     } 
    }
    
    
  }
  if(filter=="Joyas"){
    
    filtro=5
    cuenta=dbjoyas0?.length || 0;
    {if(dbjoyas0?.length>=1){
      for(let i = 0; i < (dbjoyas0?.length); i++) {
        otros[i]=dbjoyas0[i]
        dis[i]=dbjoyasdis0[i] 
      }
     } 
    }
    
    
  }
  if(filter=="Gratis"){
    
    filtro=6
    cuenta=dbgrat0?.length || 0;
    {if(dbgrat0?.length>=1){
      for(let i = 0; i < (dbgrat0?.length); i++) {
        otros[i]=dbgrat0[i]
        dis[i]=dbgratdis0[i] 
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
          <IonButton className='logu' href={`tab4/0`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo" ><CgLayoutGridSmall size="50"></CgLayoutGridSmall><b className='Namelogo'>Todos</b></IonCol></IonButton> 
          <IonButton className='logu' href={`tab4/1`} color="white" expand="full" fill="clear" size='large' ><IonCol class="logo" ><IoBeer size="37"></IoBeer><b className='Namelogo'>Bares</b></IonCol></IonButton> 
          <IonButton className='logu' href={`tab4/2`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><MdOutlineStorefront size="40"></MdOutlineStorefront><b className='Namelogo'>Restaurantes</b></IonCol></IonButton> 
          <IonButton className='logu' href={`tab4/3`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FaBed size="40"></FaBed><b className='Namelogo'>Estaderos</b></IonCol></IonButton> 
          <IonButton className='logu' href={`tab4/4`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FiCoffee size="35"></FiCoffee><b className='Namelogo'>Cafeterias</b></IonCol></IonButton> 
          <IonButton className='logu' href={`tab4/5`} color="white" expand="full" fill="clear" size='large'><IonCol class="logo"><FaPencilRuler size="35"></FaPencilRuler><b className='Namelogo'>Papelerias</b></IonCol></IonButton> 
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
              <IonSelectOption className='select' value="Menoresprecios" >Menores Precios</IonSelectOption>
              <IonSelectOption className='select' value="PetFriendly">PetFriendly</IonSelectOption>
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
        
        <IonRow className='EventosR'>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
          >
            
            {cuenta>0&&
              
              cuenta>0 ?(otros.map((info:any,dbcerdis0:any) => {
                count+=1;
                numero=dis[count-1]
                
                let url=`/productostienda?idcategori=${idcategori}`+`&idtienda=${info.id}`;
                return(<>

                  {info.foto!='' &&
                  <IonRow>
                    <SwiperSlide>
                      <IonCard class='cardE' button={true} >
                          <img className='imgEvens' src={`${UrlI}${info.foto}`} style={{width:'100%',height:'230px',alignContent:'center',alignItems:'center'}}/>
                          <IonCardHeader class='TarjetETitE'>
                            <IonCardTitle class='TarjetETit'><b>{info.nombrevento}</b></IonCardTitle>
                          </IonCardHeader>

                          <IonCardContent class='TarjetEDes'>
                            {info.descripcion}
                          </IonCardContent>
                          <IonRow class='footerE'>
                          <IonCol class='cardEOrg'>
                              <b className='by'>
                                {'Organizado por '+info.nombreorganizador}
                              </b>
                              
                            </IonCol>
                            
                            <IonCol class='cardEDis'>
                              {dis[count-1]>1&&
                                
                                <b className='bx'>
                                  {'Esta a '+Math.trunc(dis[count-1])+'Km'}
                                </b>
                              }
                              {dis[count-1]<1&&
                                
                                <b className='bx'>
                                  {'Esta a '+Math.trunc(dis[count-1]*1000)+'mts'}
                                </b>
                              }
                            </IonCol>

                          </IonRow>
                      </IonCard>
                    </SwiperSlide>
                    {count==4&&
                      
                      <SwiperSlide>Publcidad </SwiperSlide>
                      
                      
                      
                    }
                    
                  </IonRow>
                    }
                </>)
              
              })):
              (
                <h2 className='errorcategorias'>Ups parece que no tienes eventos cerca tuyo....</h2>
              )


              }
            
          </Swiper>
        </IonRow>
        
       
      
      </IonContent>

    </IonPage>
  );
};




export default Tab4;
