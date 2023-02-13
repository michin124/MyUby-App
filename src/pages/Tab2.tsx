import { IonContent, IonHeader,IonButton, IonPage,IonRefresherContent,IonRefresher, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption,IonSegment, IonSegmentButton, IonIcon,RefresherEventDetail  } from '@ionic/react';

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
  const [lati,setLati]=React.useState(-1)  
  const [long,setLong]=React.useState(-1) 
  const [dbprom0,setdbprom0]=useState(initialDb)
  const [dbdesc0,setdbdesc0]=useState(initialDb)
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let filter=query.get("filter")||0;
  let Nfiltro1=query.get("namefiltro1")||"Todas";
  let UrlI='http://127.0.0.1:8000/media/images/'
  ///ruta imagenes
  
  let cuenta2=dbdesc0?.length || 0;
  let cuenta3=dbprom0?.length || 0;
  let history=useHistory();
  const [range, setCurrentRange] = useState('');
  const [fil, setfiltro] = useState('Descuentos');
  const[error,setError]=useState(null);
  const otrosDesc=[];
  const otrosProm=[];
  let urlcercaDesc="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  let urlcercaPromo="http://127.0.0.1:8000/Tiendasback/TiendaProduct/"
  function onCordOkay(pos:any){
    const crd = pos.coords;
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
    navigator.geolocation.getCurrentPosition(onCordOkay,function(err){ console.warn(`ERROR(${err.code}): ${err.message}`)}, {enableHighAccuracy: true,timeout: 6000, maximumAge: 0})

  },[urlcercaPromo]);
      
      
  
  

  const pushRange = (msg: any) => {
    setfiltro(msg);
    
  };
  const pushFilt = (msg: any) => {
    setCurrentRange(msg); 
    window.location.reload()
  };

  if(range=="Todos"){
   
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${"0"}`+`&namefiltro1=${range}`})
    setCurrentRange('l')
  }
  if(range=="De 1 a 3km"){    
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${1}`+`&namefiltro1=${range}`})
    setCurrentRange("l")
  }
  
  if(range=="De 3 a 6km"){
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${2}`+`&namefiltro1=${range}`})
    setCurrentRange("l")
  }
  
  if(range=="De 6 a 10km"){  
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${3}`+`&namefiltro1=${range}`})
    setCurrentRange("l")
  }
  
  if(range=="Mas de 10km"){
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${4}`+`&namefiltro1=${range}`})
    setCurrentRange("l")
  }
  if(range=="Menos de 1km"){
    history.push({search:`?lat=${el.lat}`+`&longs=${el.long}`+`&filter=${5}`+`&namefiltro1=${range}`})
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

      <IonRow class="tituloTodos">
      
          <h3 className="tituloTodos" ><b>Productos con:</b></h3>
     </IonRow>

     

      <IonRow class='slider'>
        <IonSegment color="primary" value={fil} onIonChange={(e) => pushRange(`${e.detail.value}`)}>
          <IonSegmentButton class='seccion' value="Descuentos">
            <HiReceiptPercent size="25"></HiReceiptPercent>
            <IonLabel class='subseccion'>Descuentos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton class='seccion' value="Promociones">
          <BsPatchCheckFill size="25"></BsPatchCheckFill>
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

      <IonRow class="categoria">

      
        
        {fil=="Descuentos" &&
            
              cuenta2>0 ?(otrosDesc.map((info2:any) => {
                
                let url=`/productostienda?idtienda=${info2.id}`;
                
                return(<>

                  {info2.foto!='' &&
                    
                    <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info2.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info2.nombreproducto}</IonRow></IonCol>
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
