import {IonPopover, IonContent, IonHeader,IonButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonImg, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { IoBeer, IoNavigate } from "react-icons/io5";
import React, { useState } from 'react';
import Mapcat from '../helpers/mapo';
import { FcGlobe} from "react-icons/fc";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";

import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";

import { MdOutlineStorefront} from "react-icons/md";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './categoria.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { info } from 'console';
import { refresh } from 'ionicons/icons';



const Categoria= (el:any) => {
  
  const [range, setCurrentRange] = useState('');
  const [filter, setCurrentFilter] = useState('');
  let history =useHistory()
  let UrlI='http://127.0.0.1:8000/media/images/'
  let cuenta
  let { categori }:any =useParams();
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  let idcategori=query.get("idcategori");
  let lat=query.get("lat")
  let long=query.get("longs")
  let Nfiltro1=query.get("namefiltro1")||"Todas";
  let Nfiltro2=query.get("namefiltro2")||"Seleccionar";
  const otros=[];
  const dis:any=[];
  let filtro=1
  let count=0;
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
   
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${"0"}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange('l')
  }
  if(range=="De 1 a 3km"){    
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${1}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="De 3 a 6km"){
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${2}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="De 6 a 10km"){  
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${3}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  
  if(range=="Mas de 10km"){
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${4}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
  if(range=="Menos de 1km"){
    history.push({search:`?lat=${lat}`+`&longs=${long}`+`&idcategori=${idcategori}`+`&filter=${5}`+`&namefiltro1=${range}`+`&namefiltro2=${filter}`})
    setCurrentRange("l")
  }
 
  


  
  if(filter=="seleccionar"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>=1){
      for(let i = 0; i < (el.data?.length); i++) {
        otros[i]=el.data[i]
        dis[i]=el.datadis[i]
      }
     } 
    }
    
    
  }

  if(filter=="Seleccionar"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>=1){
      for(let i = 0; i < (el.data?.length); i++) {
        otros[i]=el.data[i]
        dis[i]=el.datadis[i]
      }
     } 
    }
    
    
  }
  if(filter=="Todas"){
    
    filtro=1
    cuenta=el.data?.length || 0;
    {if(el.data?.length>=1){
      for(let i = 0; i < (el.data?.length); i++) {
        otros[i]=el.data[i]
        dis[i]=el.datadis[i]
      }
     } 
    }
    
    
  }
  if(filter=="Promociones"){
    
    filtro=2
    cuenta=el.dataprom?.length || 0;
    {if(el.dataprom?.length>=1){
      for(let i = 0; i < (el.dataprom?.length); i++) {
        otros[i]=el.dataprom[i]
        dis[i]=el.datapromdis[i]
      }
     } 
    }
    
    
  }
  if(filter=="Descuentos"){
    
    filtro=3
    cuenta=el.datadesc?.length || 0;
    {if(el.datadesc?.length>=1){
      for(let i = 0; i < (el.datadesc?.length); i++) {
        otros[i]=el.datadesc[i]
        
        dis[i]=el.datadescdis[i]
      }
     } 
    }
    
    
  }
  if(filter=="Domicilios"){
    
    filtro=4
    cuenta=el.dbdom0?.length || 0;
    {if(el.dbdom0?.length>=1){
      for(let i = 0; i < (el.dbdom0?.length); i++) {
        otros[i]=el.dbdom0[i]
        dis[i]=el.dbdomdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Menoresprecios"){
    
    filtro=5
    cuenta=el.dbpresbaj0?.length || 0;
    {if(el.dbpresbaj0?.length>=1){
      for(let i = 0; i < (el.dbpresbaj0?.length); i++) {
        otros[i]=el.dbpresbaj0[i]
        dis[i]=el.dbpresbajdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Preciosjustos"){
    
    filtro=6
    cuenta=el.dbpresjus0?.length || 0;
    {if(el.dbpresjus0?.length>=1){
      for(let i = 0; i < (el.dbpresjus0?.length); i++) {
        otros[i]=el.dbpresjus0[i]
        dis[i]=el.dbpresjusdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="PetFriendly"){
    
    filtro=7
    cuenta=el.dbpetf0?.length || 0;
    {if(el.dbpetf0?.length>=1){
      for(let i = 0; i < (el.dbpetf0?.length); i++) {
        otros[i]=el.dbpetf0[i]
        
        dis[i]=el.dbpetfdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Elegantes"){
    
    filtro=8
    cuenta=el.dbelegs0?.length || 0;
    {if(el.dbelegs0?.length>=1){
      for(let i = 0; i < (el.dbelegs0?.length); i++) {
        otros[i]=el.dbelegs0[i]
        dis[i]=el.dbelegsdis0[i]
      }
     } 
    }
    
    
  }
  if(filter=="Joyas"){
    
    filtro=9
    cuenta=el.dbjoyas0?.length || 0;
    {if(el.dbjoyas0?.length>=1){
      for(let i = 0; i < (el.dbjoyas0?.length); i++) {
        otros[i]=el.dbjoyas0[i]
        dis[i]=el.dbjoyasdis0[i]
      }
     } 
    }
    
    
  }
  



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

      <IonRow class ="tipol">
      {categori=="BARES" &&
         <IonCol class="logoCategoria" ><IoBeer size="100"></IoBeer></IonCol>
      }
        {categori=="RESTAURANTES" &&
         <IonCol class="logoCategoria" ><MdOutlineStorefront size="90"></MdOutlineStorefront></IonCol>
      }
      {categori=="ESTADEROS" &&
         <IonCol class="logoCategoria" ><FaBed size="90"></FaBed></IonCol>
      }
      {categori=="PAPELERIAS" &&
         <IonCol class="logoCategoria" ><FaPencilRuler size="90"></FaPencilRuler></IonCol>
      }
      {categori=="FERRETERIAS" &&
         <IonCol class="logoCategoria" ><FaBriefcase size="90"></FaBriefcase></IonCol>
      }
      {categori=="VETERINARIAS" &&
         <IonCol class="logoCategoria" ><MdPets size="90"></MdPets></IonCol>
      }
      {categori=="CAFETERIAS" &&
         <IonCol class="logoCategoria" ><FiCoffee size="90"></FiCoffee></IonCol>
      }
      
      </IonRow>
      <IonRow class ="titulol">
        <h3><b>{categori}</b></h3>
      </IonRow>
      
      <IonRow class='selector'>
        <IonCol className='colFiltertwo'>
          <IonCol >
            <IonLabel>Tiendas con:</IonLabel>
          </IonCol>
          <IonSelect placeholder={Nfiltro2} className='filtro2' onIonChange={(ev) => pushFilt(`${ev.detail.value}`)}>
            <IonSelectOption className='select' value="Seleccionar" >Todas</IonSelectOption>
            <IonSelectOption className='select' value="Descuentos" >Descuentos</IonSelectOption>
            <IonSelectOption className='select' value="Promociones" >Promociones</IonSelectOption>
            <IonSelectOption className='select' value="Domicilios">Domicilios</IonSelectOption>
            <IonSelectOption className='select' value="Menoresprecios" >Menores Precios</IonSelectOption>
            <IonSelectOption className='select' value="Preciosjustos" >Precios justos</IonSelectOption>
            <IonSelectOption className='select' value="PetFriendly">PetFriendly</IonSelectOption>
            <IonSelectOption className='select' value="Elegantes">Lujosos</IonSelectOption>
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
      
        <IonRow class="categoriaT">
        {cuenta>0&&
            
            cuenta>0 ?(otros.map((info:any) => {
              count+=1;
              let url=`/productostienda?idcategori=${idcategori}`+`&idtienda=${info.id}`;
              return(<>

                {info.foto!='' &&
                <IonRow class='RTiendas'>
                    <IonCard href={url} class='cardT' button={true} >
                      <img className='imgTiend' src={`${UrlI}${info.foto}`} style={{width:'100%',height:'110px',alignContent:'center',alignItems:'center'}}/>
                      <IonCardHeader class='TarjetTTitT'>
                        <IonCardTitle class='TarjetTTit'><b>{info.nombretienda}</b></IonCardTitle>
                      </IonCardHeader>
                      <IonRow class='footerT' >
                        <IonCol class='cardTDis'>
                          {dis[count-1]>1&&
                            <b className='bxT'>
                              {'Esta a '+Math.trunc(dis[count-1])+'Km'}
                            </b>
                          }
                          {dis[count-1]<1&&   
                            <b className='bxT'>
                              {'Esta a '+Math.trunc(dis[count-1]*1000)+'mts'}
                            </b>
                          }
                        </IonCol>
                      </IonRow> 
                    </IonCard>
                </IonRow>
                  }
              </>)
            
            })):
            (
              <h2 className='errorcategorias'>Ups parece que no tienes {categori} cerca tuyo....</h2>
            )

            
          

        }
          
        </IonRow>
          
      
      
      {cuenta>=1&&
        <IonRow class='MapaRow'>
            <IonRow class="titulo3">
              <h3><b>{categori}</b><b> EN EL MAPA</b> </h3>
            </IonRow>

          <IonRow class='map2'>
            <IonRow class="mapa">
              <IonCol class="mapas">
                <Mapcat  latitud={lat} Longitud={long} Categorias={idcategori} Filtro={filtro} todos={el.data} prom={el.dataprom} desc={el.datadesc} domi={el.dbdom0} menos={el.dbpresbaj0} just={el.dbpresjus0} pet={el.dbpetf0} eleg={el.dbelegs0} joy={el.dbjoyas0}
                />
              
              </IonCol>

            </IonRow>
            
          </IonRow>
            
        </IonRow>
      }



      </IonContent>
      
    </IonPage>
  );
};

export default Categoria;
