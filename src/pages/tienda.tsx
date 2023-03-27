import {IonSegment,IonSelect, IonSelectOption, IonSegmentButton,IonText, IonContent, IonHeader,IonButton,IonThumbnail , IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IoBeer, IoNavigate} from "react-icons/io5";
import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import MapaObj from '../helpers/mapaObj';
import MapaObj2 from '../helpers/mapaObj2';

import { MdSchedule} from "react-icons/md";

import { BsPinMapFill} from "react-icons/bs";

import { BiPhoneCall} from "react-icons/bi";

import { IoNewspaperOutline} from "react-icons/io5";

import { BsFillStarFill} from "react-icons/bs";

import { GiHighlighter} from "react-icons/gi"



import { FaParking} from "react-icons/fa";
import { AiOutlineWifi} from "react-icons/ai";
import { Ri24HoursLine} from "react-icons/ri";
import { FaCcAmex} from "react-icons/fa";
import { BsCash,BsCreditCard} from "react-icons/bs";
import { BiFoodMenu} from "react-icons/bi";
import { FcGlobe} from "react-icons/fc";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import {ImLocation}from "react-icons/im"
import './tienda.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { search } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import Credito from "../images/CreditoC.png"
import Bancolombia from "../images/Bancolombia.png"
import Nequi from "../images/Nequi.png"
import Davivienda from "../images/Davivienda.png"
import PetI from "../images/Petimg.png"
import DomI from "../images/Domimg.png"


import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Navigation } from 'swiper'



const Tienda= (el:any=0) => {
  
  const [range, setCurrentRange] = useState('');
  const[necesidad,pushNecesidad]=useState('Productos')
  const[ubicacion,pushUbicacion]=useState('Ubicacion')
  const pushFilt = (msg: any) => {
    setCurrentRange(msg); 
  };
  //productos por condicion
  const otrosDesc:any=[];
  const otrosProm:any=[];
  const otrosEspeciales:any=[];
  const otros:any=[];
  //numero de productos
  let NumDes=0
  let NumProm=0
  let NumEspe=0
  let Amex= el.data[0].Amex
  let BancolombiaV=el.data[0].Bancolombia
  let DaviPlata=el.data[0].DaviPlata
  let NequiV=el.data[0].Nequi
  let CreditoC=el.data[0].Tcredito

  let UrlI='http://127.0.0.1:8000/media/images/'
  {if(el.data2?.length>=1){
    for(let i = 0; i < (el.data2?.length); i++) {

      if(el.data2[i].ofrecimiento_id==2){
        
        otrosDesc[i]=el.data2[i]
        
        NumDes+=1
        
      }
      if(el.data2[i].ofrecimiento_id==3){
        otrosProm[i]=el.data2[i]
        
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
  let {nombretienda,foto,descripcion,telefono,direccion,horario,domicilio,parqueadero,especialidad,id,Wifi,PetFriend,Horas24,lat,lng}=el.data[0];
  



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
                <IonSegment class='SegmentP' color="dark" onIonChange={(e) => pushNecesidad(`${e.detail.value}`)}>
                  <IonSegmentButton class='seccionT' value="Productos" >
                    
                    <IonLabel class='subseccionT'>Productos</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Informacion">
                  
                    <IonLabel class='subseccionT'>Informacion</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Mapa">
                  
                    <IonLabel class='subseccionT'>Ubicacion</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton class='seccionT' value="Pagar">
                  
                    <IonLabel class='subseccionT'>Pagar</IonLabel>
                  </IonSegmentButton>
                  
                </IonSegment>

              </IonRow> 
              <IonRow className='cuerpoTienda'>
            {necesidad=='Productos'&&

              <IonRow style={{width: '100%'}}>
                              
              
              
              {cuenta>0&&
                <IonRow className='FilaMenu'>
                  <IonButton className='buttonMenu' color="white" fill="clear" ><IonRow className='menuT' style={{justifyContent:'center'}}><BiFoodMenu size={'50'} style={{color:'#e15669',justifyContent:'center',}}></BiFoodMenu><IonTitle className='MenuTit' style={{color:'#e15669'}} >Menú</IonTitle></IonRow></IonButton>
                </IonRow>
              }
              {cuenta==0&&
                <IonRow className='FilaMenu'>
                  <IonButton className='buttonMenu2' color="white" fill="clear" ><IonRow className='menuT2' style={{justifyContent:'center'}}><BiFoodMenu size={'60'} style={{color:'#e15669',justifyContent:'center',}}></BiFoodMenu><IonTitle style={{color:'#e15669'}}>Menú</IonTitle></IonRow></IonButton>
                </IonRow>
              }

              
              
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
                                <IonCardTitle class='TarjetPTit'>{info.nombreproducto}</IonCardTitle>
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
                                  <IonCardTitle class='TarjetPTit'>{info.nombreproducto}</IonCardTitle>
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
                                  <IonCardTitle class='TarjetPTit'>{info.nombreproducto}  </IonCardTitle>
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
            }


            {necesidad=='Informacion'&&
              
              <IonRow style={{height:'450px',width:'100%'}}>
                <IonRow style={{height:'450px',width:'100%'}}>
                      
                          <IonCard style={{height:'450px',width:'100%'}} class='cardPT' button={true} >
                            <IonCardContent class='TarjetEDes' style={{height:'450px',width:'100%'}}>
                              <IonRow className='TitInfoV'>
                                <IonTitle >Metodos de pago:</IonTitle>
                              </IonRow>
                              <IonRow className='CuentaCon'>
                                {
                                  <IonCol className='CuentaItem'>
                                  <IonRow className='textA'>
                                    <BsCash size={'45px'} color={'green'}></BsCash>   </IonRow> 
                                  <IonRow className='textA'>
                                    Efectivo
                                  </IonRow> 
                                  
                                </IonCol>
                                

                                }
                                {CreditoC==true&&
                                <IonCol className='CuentaItem'>
                                  <IonRow className='textA'>
                                    <BsCreditCard size={'40px'}></BsCreditCard>   </IonRow> 
                                  <IonRow className='textA'>
                                    Tarjetas
                                  </IonRow> 
                                  
                                </IonCol>
                                  

                                }
                                {NequiV==true&&
                                <IonCol className='CuentaItem'>
                                <IonRow className='textA'>
                                <img src={Nequi} style={{height:'40px',width:'40px'}} />   </IonRow> 
                                <IonRow className='textA'>
                                  Nequi
                                </IonRow> 
                                
                              </IonCol>
                                  

                                }
                                {DaviPlata==true&&
                                  
                                  <IonCol className='CuentaItem'>
                                  <IonRow className='textA'>
                                  <img src={Davivienda} style={{height:'40px',width:'40px'}} /> </IonRow> 
                                  <IonRow className='textA'>
                                    Daviplata
                                  </IonRow> 
                                  
                                </IonCol>

                                }
                                
                                {Amex==true&&
                                 
                                  <IonCol className='CuentaItem'>
                                  <IonRow className='textA'>
                                  <FaCcAmex color='#85CCF2' size={'40px'} ></FaCcAmex> </IonRow> 
                                  <IonRow  className='textA'>
                                     Amex
                                  </IonRow> 
                                  
                                </IonCol>

                                }
                                {BancolombiaV==true&&
                                <IonCol className='CuentaItem'>
                                  <IonRow className='textA'>
                                  <img src={Bancolombia} style={{height:'45px',width:'50px'}} /> </IonRow> 
                                  <IonRow  style={{fontSize:'14px'}} className='textA'>
                                    Bancolombia
                                  </IonRow> 
                                  
                                </IonCol>
                                  

                                }
                                
                                
                                
                                
                                
                                
                              </IonRow>

                              <IonRow className='TitInfoV'>
                                <IonTitle >Cuenta con:</IonTitle>
                              </IonRow>
                              
                              <IonRow className='CuentaCon'>
                                {domicilio==true&&
                                      <IonCol className='CuentaItem'>
                                          <IonRow>
                                           <img src={DomI} style={{height:'40px',width:'45px'}} />
                                          </IonRow> 
                                          <IonRow style={{marginTop:'5px'}} className='textA'>
                                            Domicilio
                                          </IonRow>
                                      </IonCol>

                                  
                                }

                                {parqueadero==true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                       <FaParking color='blue' size={'40px'}></FaParking>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        Parqueadero
                                      </IonRow>                                   
                                    
                                  </IonCol>
                                    
                                  
                                }
                                {PetFriend==true&&
                                  <IonCol className='CuentaItem'>
                                    <IonRow className='textA'>
                                      <img src={PetI} style={{height:'45px',width:'60px',marginBottom:'-10px'}} />
                                    </IonRow> 
                                    <IonRow className='textA'>
                                      Pet
                                      Friendly
                                    </IonRow> 
                                    
                                  </IonCol>
                                  
                                }

                                {Horas24==true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                        <Ri24HoursLine color='red' size={'40px'}></Ri24HoursLine>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        24Horas
                                      </IonRow> 
                                    
                                  </IonCol>
                                  
                                }
                                {Wifi==true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                        <AiOutlineWifi color='blue' size={'40px'}></AiOutlineWifi>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        Wifi
                                      </IonRow>
                                    
                                  </IonCol>
                                  
                                }

                              </IonRow>
                              <IonRow className='TitInfo'>
                                <IonTitle>Datos:</IonTitle>
                              </IonRow>
                              <IonRow className='datInf' style={{marginLeft:'1%',marginRight:'1%'}}>
                                <IonList >
                                  <IonItem  style={{width:'100%',marginLeft:'-10px'}}>
                                    <IonThumbnail style={{size:'20px',marginRight:'0px',marginBottom:'-5px'}}>
                                      <MdSchedule size={'40'} color={'black'}></MdSchedule>
                                    </IonThumbnail>
                                    <p className='data'>Horario: {horario} de asdasdlunes a viernes</p>
                                    
                                  </IonItem>

                                  <IonItem style={{width:'100%',marginLeft:'-10px'}}>
                                    <IonThumbnail  style={{size:'20px',marginRight:'-10px',marginBottom:'-5px'}}>
                                      <BsPinMapFill size={'35'} color={'red'}></BsPinMapFill>
                                    </IonThumbnail>
                                    <p className='data'>Direccion: {direccion}</p>
                                  </IonItem>

                                  <IonItem style={{width:'100%',marginLeft:'-10px'}}>
                                    <IonThumbnail style={{size:'20px',marginRight:'-10px',marginBottom:'-5px'}}>
                                      <BiPhoneCall size={'35'} color={'#2196f3'}></BiPhoneCall>
                                    </IonThumbnail>
                                    <p className='data'>Telefono: {telefono} </p>
                                  </IonItem>
                                  <IonItem  style={{width:'100%',marginLeft:'-10px'}}>
                                    <IonThumbnail  style={{size:'20px',marginRight:'-10px',marginBottom:'-5px'}}>
                                      <IoNewspaperOutline size='35' color={'silver'}></IoNewspaperOutline>
                                    </IonThumbnail>
                                    <p className='data'>Descripcion: {descripcion}</p>
                                    
                                  </IonItem>
                                  <IonItem style={{width:'100%',marginLeft:'-10px'}}>
                                    <IonThumbnail style={{size:'20px',marginRight:'-10px',marginBottom:'-5px'}}>
                                      <BsFillStarFill size={'35'} color={'gold'}></BsFillStarFill>
                                    </IonThumbnail>
                                    <p className='data'>Especialidad: {especialidad}</p>
                                  </IonItem>
                                </IonList>

                              </IonRow>
                              <IonRow className='TitInfoF'>
                                <IonTitle>No cuenta con:</IonTitle>
                              </IonRow>
                              <IonRow className='CuentaCon'>
                                {domicilio!=true&&
                                      <IonCol className='CuentaItem'>
                                          <IonRow>
                                           <img src={DomI} style={{height:'40px',width:'45px'}} />
                                          </IonRow> 
                                          <IonRow style={{marginTop:'5px'}} className='textA'>
                                            Domicilio
                                          </IonRow>
                                      </IonCol>

                                  
                                }

                                {parqueadero!=true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                       <FaParking color='blue' size={'40px'}></FaParking>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        Parqueadero
                                      </IonRow>                                   
                                    
                                  </IonCol>
                                    
                                  
                                }
                                {PetFriend!=true&&
                                  <IonCol className='CuentaItem'>
                                    <IonRow className='textA'>
                                      <img src={PetI} style={{height:'45px',width:'60px',marginBottom:'-10px'}} />
                                    </IonRow> 
                                    <IonRow className='textA'>
                                      Pet
                                      Friendly
                                    </IonRow> 
                                    
                                  </IonCol>
                                  
                                }

                                {Horas24!=true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                        <Ri24HoursLine color='red' size={'40px'}></Ri24HoursLine>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        24Horas
                                      </IonRow> 
                                    
                                  </IonCol>
                                  
                                }
                                {Wifi!=true&&
                                  <IonCol className='CuentaItem'>
                                      <IonRow className='textA'>
                                        <AiOutlineWifi color='blue' size={'40px'}></AiOutlineWifi>
                                      </IonRow> 
                                      <IonRow className='textA'>
                                        Wifi
                                      </IonRow>
                                    
                                  </IonCol>
                                  
                                }

                              </IonRow>
                            </IonCardContent>
                            
                          </IonCard>


                       
                        
                        
                      </IonRow>






              </IonRow>

            }
            {necesidad=='Mapa'&&
              <IonRow style={{width:'100%'}}>
                <IonRow class='sliderTO'>
                  <IonSegment class='SegmentPO' color="primary" onIonChange={(e) => pushUbicacion(`${e.detail.value}`)} >
                    <IonSegmentButton class='seccionTO' value="Ubicacion" >
                      
                      <IonLabel class='subseccionTO'>Ubicacion</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton class='seccionTO' value="Ir">
                    
                      <IonLabel class='subseccionTO'>Como llegar</IonLabel>
                    </IonSegmentButton>
                    
                  </IonSegment>

              </IonRow> 
              <IonRow className='mapaObj'>
                
                {ubicacion=='Ubicacion'&&
                  <IonRow className='mapaObj' style={{width:'100%'}}>
                  
                    <IonText style={{textAlign:'left',marginLeft:'5%',marginTop:'5px'}}>A continuacion se presenta la ubicacion de la tienda</IonText>
                    <MapaObj  latitude={lat} Longitude={lng}/>
                  </IonRow>
                 

                }
                {ubicacion=='Ir'&&
                  <IonRow className='mapaObj2' style={{width:'100%'}}>
                  
                    <IonText style={{textAlign:'left',marginLeft:'5%',marginTop:'5px'}}>A continuacion se marca la ruta para llegar desde tu posicion actual</IonText>
                    <IonRow className='filtroMap'>
                      <IonCol className='colFilterOneT'>
                            <h4 className='TitleF' style={{width:'100%', marginLeft:'-5%'}}>Transporte:</h4>
                          <IonSelect className='filtroT' ok-text="Okay" onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
                            <IonSelectOption className='select' value="TRANSIT">Bus</IonSelectOption>
                            <IonSelectOption className='select' value="DRIVING">Manejando</IonSelectOption>
                            <IonSelectOption className='select' value="WALKING">Caminando</IonSelectOption>
                            
                            
                            
                          </IonSelect>
                        </IonCol>
                    </IonRow>
                    {range==""&&
                      <MapaObj2  latitude={lat} Longitude={lng} transport={1}/>
                    }
                    {range=="TRANSIT"&&
                      <MapaObj2  latitude={lat} Longitude={lng} transport={1}/>
                    }
                    {range=="DRIVING"&&
                      <MapaObj2  latitude={lat} Longitude={lng} transport={2}/>
                    }
                    {range=="WALKING"&&
                      <MapaObj2  latitude={lat} Longitude={lng} transport={3}/>
                    }
                    
                  </IonRow>
                 

                }


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
  