import { IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './todos.css';
import { useParams } from 'react-router';
import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {FaPercentage} from "react-icons/fa";
import { useHistory, useLocation} from 'react-router';
import { Console } from 'console';


import { image } from 'ionicons/icons';






const Tab2= (el:any) => {
  
  let UrlI='http://127.0.0.1:8000/media/images/'
  ///ruta imagenes
  let cuenta=el.data?.length || 0;
  let cuenta2=el.dataD?.length || 0;
  let cuenta3=el.dataO?.length || 0;
  let history=useHistory();
  const [text, setText] = useState<string>();
  let { filtro }:any =useParams();
  const [logs, setLogs] = useState('')
  const pushLog = (msg: any) => {
    setLogs(msg);
    
  };
  const otros=[];
  
  let filt=1

if(logs==""){
  filt=1
  cuenta=el.data?.length || 0;
  {if(el.data?.length>1){
    for(let i = 0; i < el.data?.length; i++) {
      otros[i]=el.data[i]
    }
   } 
  }
  
  
}
if(logs=="Cercanas"){
  filt=1
  cuenta=el.data?.length || 0;
  {if(el.data?.length>1){
    for(let i = 0; i < el.data?.length; i++) {
      otros[i]=el.data[i]
    }
   } 
  }
  
  
}
if(logs=="Cercanas con promociones"){
  filt=2
  cuenta=el.dataprom?.length || 0;
  {if(el.dataprom?.length>1){
    for(let i = 0; i < el.dataprom?.length; i++) {
      otros[i]=el.dataprom[i]
    }
   } 
  }
 
}

if(logs=="Cercanas con descuentos"){
  filt=3
  
  cuenta=el.datadesc?.length || 0;
  {if(el.datadesc?.length>1){
    for(let i = 0; i < el.datadesc?.length; i++) {
      otros[i]=el.datadesc[i]
    }
   } 
  }
  
}

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

      <IonRow class='botoneseleccion'>
          
          <IonButton class="todos" href="/todos/Todos" color="white" expand="full" fill="clear" size='large'>TODOS</IonButton>
          <IonButton class="descuentos" href="/todos/Descuentos" color="white" expand="full" fill="clear" size='large'>DESCUENTOS</IonButton> 
          <IonButton class="promociones" href="/Todos/Promociones" color="white" expand="full" fill="clear" size='large'> PROMOCIONES</IonButton>  
        </IonRow>

        <IonRow class ="titulol">
          <h1>{filtro}</h1>
        </IonRow>
        
        <IonRow class='selector'>
        <IonList className='listo'>
          <IonItem className='selecto'>
            <IonSelect  className='select' placeholder='Cercanas' interface="popover" onIonChange={(e) => pushLog(`${e.detail.value}`)}>
              <IonSelectOption className='select' value="Cercanas" >Cercanos</IonSelectOption>
              <IonSelectOption className='select' value="Cercanas con promociones" >Cercanos con promociones</IonSelectOption>
              <IonSelectOption className='select' value="Cercanas con descuentos">Cercanos con descuentos</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        
        


      </IonRow> 


        <IonRow class="categoria">

        
          {filtro=="Todos" &&
            
            cuenta>=0 ?(el.data.map((info1:any) => {

              let url=`/productostienda?idtienda=${info1.id}`;
              
              
              return(<>

                {info1.foto!='' &&
                
                  <IonCol class="Categorias" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={`${UrlI}${info1.foto}`} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info1.nombretienda}</IonRow></IonCol>
                }
              </>)
          
            })):(       
              null
            )
          }
          
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
