import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
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
  let img1=require(`${'../images/5.jpg'}`)
  let cuenta=el.data?.length || 0;
  let cuenta2=el.dataD?.length || 0;
  let cuenta3=el.dataO?.length || 0;
  let history=useHistory();
  const [text, setText] = useState<string>();
  let { filtro }:any =useParams();
  

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
        <IonRow class="categoria">

        
          {filtro=="Todos" &&
            
            cuenta>1 ?(el.data.map((info1:any) => {

              let url=`/productostienda?idtienda=${info1.id}`;
              let imgg='./src/images/7.jpg'
              
              return(<>
             
              <IonCol class="tcate1" ><IonRow ><IonButton href={url} className='fototiendas' expand="full" fill="clear" size='large'><img src={require(`${'../images/7.jpg'}`)} sizes={'100'} alt="Logo" /></IonButton></IonRow><IonRow  class="nombre">{info1.nombretienda}</IonRow></IonCol>
              </>)
          
            })):(       
              'ups'
            )
          }
          
          {filtro=="Descuentos" &&
                cuenta>0 ?(el.dataD.map((info2:any) => {
                  
                  let url=`/productostienda?idtienda=${info2.id}`;
                  return(<>
                  
                  <IonCol class="tcate1" ><IonRow ><IonButton href={url} className='fototiendas' color="white" expand="full" fill="clear" size='large'></IonButton></IonRow><IonRow  class="nombre">{info2.nombretienda}</IonRow></IonCol>
                  </>)
          
            })):(       
              null
            )
          }
          {filtro=="Promociones" &&
                cuenta>0 ?(el.dataO.map((info3:any) => {
                  
                  let url=`/productostienda?idtienda=${info3.id}`;
                  return(<>
                  
                  <IonCol class="tcate1" ><IonRow ><IonButton href={url} className='fototiendas' color="white" expand="full" fill="clear" size='large'></IonButton></IonRow><IonRow  class="nombre">{info3.nombretienda}</IonRow></IonCol>
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
