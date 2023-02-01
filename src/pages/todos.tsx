import { IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption,IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './todos.css';
import { useParams } from 'react-router';
import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {FaPercentage} from "react-icons/fa";
import { useHistory, useLocation} from 'react-router';
import { Console } from 'console';

import { HiReceiptPercent} from "react-icons/hi2";
import { BsPatchCheckFill}from "react-icons/bs";
import { image } from 'ionicons/icons';






const Tab2= (el:any) => {
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let Nfiltro1=query.get("namefiltro1")||"Todas";
  let UrlI='http://127.0.0.1:8000/media/images/'
  ///ruta imagenes
  let cuenta=el.data?.length || 0;
  let cuenta2=el.dataD?.length || 0;
  let cuenta3=el.dataO?.length || 0;
  let history=useHistory();
  const [text, setText] = useState<string>();
  const [filter, setCurrentFilter] = useState('');
  const [logs, setLogs] = useState('')
  const pushLog = (msg: any) => {
    setLogs(msg);
    
  };
  const otros=[];
  const [filtro, setfiltro] = useState('Descuentos');
  let filt=1
  const pushRange = (msg: any) => {
    setfiltro(msg);
    
  };
  const pushFilt = (msg: any) => {
    setCurrentFilter(msg); 
  };

  console.log(filtro)

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

      <IonRow >
          <h3 ><b>Productos con:</b></h3>
     </IonRow>

     

      <IonRow class='slider'>
        <IonSegment color="primary" value={filtro} onIonChange={(e) => pushRange(`${e.detail.value}`)}>
          <IonSegmentButton class='seccion' value="Descuentos">
            <HiReceiptPercent size="25"></HiReceiptPercent>
            <IonLabel class='subseccion'>Descuentos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton class='seccion' value="Promociones">
          <BsPatchCheckFill size="25"></BsPatchCheckFill>
            <IonLabel class='subseccion' >Promociones</IonLabel>
          </IonSegmentButton>
        </IonSegment>

      </IonRow>
      <IonRow>
      <IonCol className='colFilterOneT'>
         
            <h4 className='TitleF'>Rango:</h4>
          
          
          <IonSelect placeholder={Nfiltro1} className='filtroT' ok-text="Okay" onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
            <IonSelectOption className='select' value="Todas">Todas</IonSelectOption>
            <IonSelectOption className='select' value="Menos de 1km">Menos de 1km</IonSelectOption>
            <IonSelectOption className='select' value="De 1 a 3km">De 1 a 3km</IonSelectOption>
            <IonSelectOption className='select' value="De 3 a 6km">De 3 a 6km</IonSelectOption>
            <IonSelectOption className='select' value="De 6 a 10km">De 6 a 10km</IonSelectOption>
            <IonSelectOption className='select' value="Mas de 10km">Mas de 10km</IonSelectOption>
            
          </IonSelect>
        </IonCol>
     </IonRow>

      <IonRow class="categoria">

      
        
        {filtro=="Descuentos" &&
        
              cuenta2>0 ?(el.dataD.map((info2:any) => {
                
                let url=`/productostienda?idtienda=${info2.id}`;
                return(<>

                  {info2.foto!='' &&
                  
                    <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info2.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info2.nombretienda}</IonRow></IonCol>
                  }
                </>)
        
          })):(       
            null
          )
        }
        {filtro=="Promociones" &&
              cuenta3>0 ?(el.dataO.map((info3:any) => {
                
                let url=`/productostienda?idtienda=${info3.id}`;
                
                return(<>

                  {info3.foto!='' &&
                  
                    <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info3.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info3.nombretienda}</IonRow></IonCol>
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
