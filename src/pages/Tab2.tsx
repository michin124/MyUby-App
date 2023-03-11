import { IonContent, IonHeader,IonButton, IonPage,IonRefresherContent,IonRefresher, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption,IonSegment, IonSegmentButton, IonIcon,RefresherEventDetail,IonTabButton  } from '@ionic/react';

import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
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
import './Tab1.css';
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


const Tab2= (el:any) => {
  
  
  const [dbprom0,setdbprom0]=useState(initialDb)
  const [dbdesc0,setdbdesc0]=useState(initialDb)
  const [dbpromDis0,setdbpromDis0]=useState(initialDb)
  const [dbdescDis0,setdbdescDis0]=useState(initialDb)
  const [dbpromNam0,setdbpromNam0]=useState(initialDb)
  const [dbdescNam0,setdbdescNam0]=useState([])



  let {search}=useLocation();
  let query=new URLSearchParams(search);
  //filtro encargado del rango para la peticion 
  let filter=query.get("filter")||0;
  let Nfiltro1=query.get("namefiltro1")||"Todas";
    ///ruta imagenes
  let UrlI='http://127.0.0.1:8000/media/images/'
  //numero de categoria
  let { filtro }:any =useParams()||query.get("filtro");
  let cuenta2=dbdesc0?.length || 0;
  let cuenta3=dbprom0?.length || 0;
  let history=useHistory();
  const [range, setCurrentRange] = useState('');
  //Variable encargada del slider
  const [fil, setfiltro]=useState('');
  const[error,setError]=useState(null);
  const otrosDesc:any=[];
  const otrosProm:any=[];
  const otrosDescDis:any=[];
  const otrosPromDis:any=[];
  const otrosDescNam:any=[];
  const otrosPromNam:any=[];
  let urlcercaDesc="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  let urlcercaPromo="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  function onCordOkay(pos:any){
    
    const crd = pos.coords;
    
    let long=crd.longitude
    let lati=crd.latitude
    
    
    if(filtro==undefined)
    {
      filtro=0;
    }
    let gus=`${urlcercaDesc}${lati}/${long}/3/${filter}/${filtro}/`;
    helphttp()
    .get(gus).then((res)=>{
      if(!res.err){
        setdbdesc0(res.productos)
        setdbdescDis0(res.distancia)
        setdbdescNam0(res.nombreT)
        setError(null)
      }else{

        setdbdesc0([])
        setError(res)
      }  
    })
    let gun=`${urlcercaPromo}${lati}/${long}/2/${filter}/${filtro}/`;
    
      helphttp()
      .get(gun).then((res)=>{
        if(!res.err){
          setdbprom0(res.productos)
          setdbpromDis0(res.distancia)
          setdbpromNam0(res.nombreT)
          setError(null)
        }else{
          setdbprom0([])
          setError(res)
          
        }  
      })

    
  }
  if(fil=='')
  {
    if(query.get("fil")!=undefined)
    {
      setfiltro(query.get("fil")!)
    }
    if(query.get("fil")==undefined)
    {
      setfiltro('Descuentos')
    }
    
  }
  {if(dbprom0?.length>=1){
    for(let i = 0; i < (dbprom0?.length); i++) {
      otrosProm[i]=dbprom0[i]
      otrosPromDis[i]=dbpromDis0[i]
      otrosPromNam[i]=dbpromNam0[i]||'name'
      

    }
    } 
  }
  
  {if(dbdesc0?.length>=1){
    for(let i = 0; i < (dbdesc0?.length); i++) {
      otrosDesc[i]=dbdesc0[i]
      otrosDescDis[i]=dbdescDis0[i]
      otrosDescNam[i]=dbdescNam0[i]||'name'

    }
    } 
  }

  useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition(onCordOkay,function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)}, {enableHighAccuracy: true,timeout: 6000, maximumAge: 0})
    
    if(query.get("fil")!=null)
    {
      setfiltro(query.get("fil")!)
      
    }    
  
  },[urlcercaPromo]);
  

  let count=0;
  let numero
  

  const pushRange = (msg: any) => {
    setfiltro(msg);
    
  };
  const pushFilt = (msg: any) => {
    setCurrentRange(msg); 
    window.location.reload()
  };

  if(range=="Todos"){
   
    history.push({search:`&filter=${"0"}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange('l')
  }
  if(range=="De 1 a 3km"){    
    history.push({search:`&filter=${1}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange("l")
  }
  
  if(range=="De 3 a 6km"){
    history.push({search:`&filter=${2}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange("l")
  }
  
  if(range=="De 6 a 10km"){  
    history.push({search:`&filter=${3}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange("l")
  }
  
  if(range=="Mas de 10km"){
    history.push({search:`&filter=${4}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange("l")
  }
  if(range=="Menos de 1km"){
    history.push({search:`&filter=${5}`+`&namefiltro1=${range}`+`&filtro=${filtro}`+`&fil=${fil}`})
    setCurrentRange("l")
  }
 

  return (
   
    <IonPage>
      
      
      <IonHeader class='header'>
      <IonRow class='header2'>
      <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
      </IonRow>  
      </IonHeader>
      

      <IonContent fullscreen>
      <IonRow>
        <IonRow className='logosRow'>
          <IonButton className='logu' href={`todos/0`} expand="full" fill="clear" size='large'><IonCol class="logo" ><CgLayoutGridSmall size="50"></CgLayoutGridSmall><b className='Namelogo'>Todos</b></IonCol></IonButton> 
          <IonButton className='logu' href={`todos/1`} expand="full" fill="clear" size='large' ><IonCol class="logo" ><IoBeer size="37"></IoBeer><b className='Namelogo'>Bares</b></IonCol></IonButton> 
          <IonButton className='logu' href={`todos/2`} expand="full" fill="clear" size='large'><IonCol class="logo"><MdOutlineStorefront size="40"></MdOutlineStorefront><b className='Namelogo'>Restaurantes</b></IonCol></IonButton> 
          <IonButton className='logu' href={`todos/3`} expand="full" fill="clear" size='large'><IonCol class="logo"><FaBed size="40"></FaBed><b className='Namelogo'>Estaderos</b></IonCol></IonButton> 
          <IonButton className='logu' href={`todos/4`} expand="full" fill="clear" size='large'><IonCol class="logo"><FiCoffee size="35"></FiCoffee><b className='Namelogo'>Cafeterias</b></IonCol></IonButton> 
          <IonButton className='logu' href={`todos/5`} expand="full" fill="clear" size='large'><IonCol class="logo"><FaPencilRuler size="35"></FaPencilRuler><b className='Namelogo'>Papelerias</b></IonCol></IonButton> 
        </IonRow>
        
      </IonRow>
      
      <IonRow class="tituloTodos">
          <h3 className="tituloTodos" ><b>Productos con:</b></h3>
     </IonRow>

      <IonRow class='slider'>
        <IonSegment color="primary" value={fil} onIonChange={(e) => pushRange(`${e.detail.value}`)}>
          <IonSegmentButton class='seccion' value="Descuentos">
            <HiReceiptPercent size="20"></HiReceiptPercent>
            <IonLabel class='subseccion'>Descuentos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton class='seccion' value="Promociones">
          <BsPatchCheckFill size="20"></BsPatchCheckFill>
            <IonLabel class='subseccion'>Promociones</IonLabel>
          </IonSegmentButton>
        </IonSegment>

      </IonRow>
      <IonRow>
      <IonCol className='colFilterOneT'>
            <h4 className='TitleF'>Rango:</h4>
          <IonSelect placeholder={Nfiltro1} className='filtroT' ok-text="Okay" onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
            <IonSelectOption className='select' value="Todos">Todos</IonSelectOption>
            <IonSelectOption className='select' value="Menos de 1km">Menos de 1km</IonSelectOption>
            <IonSelectOption className='select' value="De 1 a 3km">De 1 a 3km</IonSelectOption>
            <IonSelectOption className='select' value="De 3 a 6km">De 3 a 6km</IonSelectOption>
            <IonSelectOption className='select' value="De 6 a 10km">De 6 a 10km</IonSelectOption>
            <IonSelectOption className='select' value="Mas de 10km">Mas de 10km</IonSelectOption>
            
          </IonSelect>
        </IonCol>
     </IonRow>
     

      <IonRow class="productosTab2">

        {fil=="Descuentos" &&
            
              cuenta2>0 ?(otrosDesc.map((info2:any) => {
                count+=1;
                
                numero=info2[count-1]
                let url=`/productostienda?idtienda=${info2.id}`;
                
                return(<>

                  {info2.foto!='' &&
                  <IonRow>
                    <IonCard class='cardP' button={true} >
                      <img className='imgProd' src={`${UrlI}${info2.foto}`} style={{width:'100%',height:'100px',alignContent:'center',alignItems:'center'}}/>
                      <IonCardHeader class='TarjetPTitP'>
                        <IonCardTitle class='TarjetPTit'><b>{info2.nombreproducto}</b></IonCardTitle>
                      </IonCardHeader>

                      <IonRow class='footerP'>
                        <IonCol class='cardPOrg'>
                          <b className='byP'>
                            {'Tienda '+otrosDescNam[count-1].nombretienda}
                          </b>
                          </IonCol>
                          <IonCol class='cardPDis'>
                          {otrosDescDis[count-1]>1&&
                            
                            <b className='bxP'>
                              {'Esta a '+Math.trunc(otrosDescDis[count-1])+'Km'}
                            </b>
                          }
                          {otrosDescDis[count-1]<1&&
                            
                            <b className='bxP'>
                              {'Esta a '+Math.trunc(otrosDescDis[count-1]*1000)+'mts'}
                            </b>
                          }
                        </IonCol>
                      </IonRow>
                      
                    </IonCard>

                  </IonRow>
                    
                  }
                </>)
        
          })):(       
            null
          )
        }
       
        {fil=="Promociones" &&
              cuenta3>0 ?(otrosProm.map((info3:any) => {
                
                let url=`/productostienda?idtienda=${info3.id}`;
                
                return(<>

                  {info3.foto!='' &&
                  
                    <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info3.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info3.nombreproducto}</IonRow></IonCol>
                  }
                </>)
            
              })):(     
                  
                null
          )
        }  
              
        
      </IonRow>




      
      
      </IonContent>

    </IonPage>
  );
};




export default Tab2;
