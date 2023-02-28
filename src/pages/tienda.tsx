import {IonSegment, IonSegmentButton, IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer, IoNavigate} from "react-icons/io5";
import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {ImLocation}from "react-icons/im"
import './tienda.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { search } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Navigation } from 'swiper'



const Tienda= (el:any=0) => {
  console.log(el)

  //productos por condicion
  const otrosDesc:any=[];
  const otrosProm:any=[];
  const otrosEspeciales:any=[];
  const otros:any=[];
  //numero de productos
  let NumDes=0
  let NumProm=0
  let NumEspe=0
  
  let UrlI='http://127.0.0.1:8000/media/images/'
  {if(el.data2?.length>=1){
    for(let i = 0; i < (el.data2?.length); i++) {

      if(el.data2[i].ofrecimiento_id==2){
        
        otrosDesc[i]=el.data2[i]
        
        NumDes+=1
        
      }
      if(el.data2[i].ofrecimiento_id==3){
        otrosProm[i]=el.data2[i]
        console.log(otrosProm)
        NumProm+=1
        
        
      }
      if(el.data2[i].Especial==true){
        otrosEspeciales[i]=el.data2[i]
        NumEspe+=1
      }
      otros[i]=el.data2[i]
      

    }
    } 
  }
  let history=useHistory(); 
  let cuenta=el.data2?.length || 0;
  let {nombretienda,foto,telefono,direccion,horario,domicilio,parqueadero,especialidad,id}=el.data[0];
  



    return (
      <IonPage>
        <IonHeader class='header'>
        <IonRow class='header2'>
        <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
        </IonRow>  
        </IonHeader>
        <IonContent fullscreen>
        <IonRow className='fondoTienda'>
          {foto!='' &&
            <IonRow class='fototienda'>
              <img src={`${UrlI}${foto}`} style={{height:'250px',width:'100%'}} />
            </IonRow>
          }
          

          
            <IonRow className='contenTiend'>
            <IonRow className='TituloTienda' >
              <IonTitle class='nombretienda'>{nombretienda}</IonTitle>
            </IonRow>
            <IonRow className='contenidos'>
              <IonRow class='sliderT'>
                <IonSegment class='SegmentP' color="primary" >
                  <IonSegmentButton class='seccionT' value="Productos">
                    
                    <IonLabel class='subseccionT'>Productos</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Info.Tienda">
                  
                    <IonLabel class='subseccionT'>Info Tienda</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Mapa">
                  
                    <IonLabel class='subseccionT'>Mapa</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Pagar">
                  
                    <IonLabel class='subseccionT'>Pagar</IonLabel>
                  </IonSegmentButton>
                  
                </IonSegment>

              </IonRow> 
           
            <IonRow className='cuerpoTienda'>
              
           
            {NumEspe>0&&
            

            <IonRow class='products'>
                <IonRow className='titulProT'>
                  <IonTitle >Productos Especiales</IonTitle>
                </IonRow>
                
              <IonRow class="Tiendap">
                
              <Swiper
                slidesPerView={2}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                className={'productosT'}
                spaceBetween={-0}
                pagination={true}
                modules={[ Pagination]}
                style={{height:'150px',width:'100%'}}
              >
                
                  {NumEspe>0 ?(otrosEspeciales.map((info:any) => {
                  
                  return(<>

                    {info.foto!='' &&
                    
                      <IonRow>
                      <SwiperSlide style={{height:'140px',width:'200px'}}>
                        <IonCard class='cardPT' button={true} >
                            <img className='imgProd' src={`${UrlI}${info.foto}`} style={{width:'200px',height:'100px',alignContent:'center',alignItems:'center'}}/>
                            <IonCardHeader class='TarjetPTitP'>
                              <IonCardTitle class='TarjetPTit'><b>{info.nombreproducto}</b></IonCardTitle>
                            </IonCardHeader>
                          </IonCard>

                        </SwiperSlide>
                        
                        
                      </IonRow>
                      
                    
                    
                    }
                  </>)
                  })):(       
                    <h2 className='errorcategorias'>No hay productos registrados</h2>
                  )}

                </Swiper>
              </IonRow>
              </IonRow>

        
          
          
          
            }

            {NumDes>0&&
                

              <IonRow class='products'>
                  <IonRow className='titulProT'>
                    <IonTitle >Productos con Descuentos</IonTitle>
                  </IonRow>
                 
                <IonRow class="Tiendap">
                  
                <Swiper
                  slidesPerView={2}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  className={'productosT'}
                  spaceBetween={-0}
                  pagination={true}
                  modules={[ Pagination]}
                  style={{height:'150px',width:'100%'}}
                >
                  
                    {NumDes>0 ?(otrosDesc.map((info:any) => {
                    
                    return(<>

                      {info.foto!='' &&
                      
                        <IonRow>
                        <SwiperSlide style={{height:'140px',width:'200px'}}>
                          <IonCard class='cardPT' button={true} >
                              <img className='imgProd' src={`${UrlI}${info.foto}`} style={{width:'200px',height:'100px',alignContent:'center',alignItems:'center'}}/>
                              <IonCardHeader class='TarjetPTitP'>
                                <IonCardTitle class='TarjetPTit'><b>{info.nombreproducto}</b></IonCardTitle>
                              </IonCardHeader>
                            </IonCard>

                          </SwiperSlide>
                          
                          
                        </IonRow>
                        
                      
                      
                      }
                    </>)
                    })):(       
                      <h2 className='errorcategorias'>No hay productos registrados</h2>
                    )}

                  </Swiper>
                </IonRow>
                </IonRow>

          
            
            
            
            }

            {console.log(NumProm)}
            {NumProm>=1&&
              
              
              <IonRow class='products'>
                  <IonRow className='titulProT'>
                    <IonTitle >Productos con Promociones</IonTitle>
                  </IonRow>
                  
                <IonRow class="Tiendap">
                  
                <Swiper
                  slidesPerView={2}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  className={'productosT'}
                  spaceBetween={-0}
                  pagination={true}
                  modules={[ Pagination]}
                  style={{height:'150px',width:'100%'}}
                >
                  
                    {NumProm>0 ?(otrosProm.map((info:any) => {
                    
                    return(<>

                      {info.foto!='' &&
                      
                        <IonRow>
                        <SwiperSlide style={{height:'140px',width:'200px'}}>
                          <IonCard class='cardPT' button={true} >
                              <img className='imgProd' src={`${UrlI}${info.foto}`} style={{width:'200px',height:'100px',alignContent:'center',alignItems:'center'}}/>
                              <IonCardHeader class='TarjetPTitP'>
                                <IonCardTitle class='TarjetPTit'><b>{info.nombreproducto}</b></IonCardTitle>
                              </IonCardHeader>
                            </IonCard>

                          </SwiperSlide>
                          
                          
                        </IonRow>
                        
                      
                      
                      }
                    </>)
                    })):(       
                      <h2 className='errorcategorias'>No hay productos registrados</h2>
                    )}

                  </Swiper>
                </IonRow>
                </IonRow>

          
            
            
            
            }
            
            
            
               
            </IonRow>
              
            </IonRow>
            </IonRow>
            
              
          
            

            
            
      
          

       
        
          </IonRow>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tienda;
  