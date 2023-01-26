import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';


import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Categoria from '../pages/categoria';
import { useHistory, useLocation, useParams } from 'react-router';
import CrudTabla from './crudtabla';
import { Console } from 'console';
import { helphttp } from '../helpers/helphttp';
import { fileTray, options } from 'ionicons/icons';

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




  function Apicategorias ()
  {

    let history=useHistory();
    let {search}=useLocation();
    let query=new URLSearchParams(search);
    let idcategori=query.get("idcategori");
    let lat=query.get("lat");
    let long=query.get("longs");
    let filter=query.get("filter")
    
    
    const [dbcer0,setdbcer0]=useState(initialDb)
    const [dbprom0,setdbprom0]=useState(initialDb)
    const [dbdesc0,setdbdesc0]=useState(initialDb)
    const [dbdom0,setdbdom0]=useState(initialDb)
    const [dbpresbaj0,setdbpresbaj0]=useState(initialDb)
    const [dbpresjus0,setdbpresjus0]=useState(initialDb)
    const [dbjoyas0,setdbjoyas0]=useState(initialDb)
    const [dbelegs0,setdbelg0]=useState(initialDb)
    const [dbpetf0,setdbpetf0]=useState(initialDb)


    const[error,setError]=useState(null);
    let api=helphttp();

    //apicerca
    let urlCerca="http://127.0.0.1:8000/Tiendasback/TiendaDirCat/"

    useEffect(()=>{
    let guno=`${urlCerca}${lat}/${long}/${idcategori}/${filter}/`;
    
      helphttp()
      .get(guno).then((res)=>{
          if(!res.err){
            setdbcer0(res.companies)
           
            setError(null)
          }else{
            setdbcer0([])
            setError(res)
          }  
        })
        
  },[urlCerca]);
  
  //apiprom
  let urlcercaPromo="http://127.0.0.1:8000/Tiendasback/TiendaDirCatO/"

    useEffect(()=>{
    let gun=`${urlcercaPromo}${lat}/${long}/${idcategori}/2/${filter}/`;
    
      helphttp()
      
      .get(gun).then((res)=>{
          if(!res.err){
            setdbprom0(res.companies)
            setError(null)
          }else{
            setdbprom0([])
            setError(res)
          }  
        })
        
  },[urlcercaPromo]);
  

  //apidescuentos
  let urlcercaDesc="http://127.0.0.1:8000/Tiendasback/TiendaDirCatO/"

    useEffect(()=>{
    let gus=`${urlcercaDesc}${lat}/${long}/${idcategori}/3/${filter}/`;
      helphttp()
      .get(gus).then((res)=>{
          if(!res.err){
            setdbdesc0(res.companies)
            setError(null)
          }else{
            setdbdesc0([])
            setError(res)
          }  
        })
        
  },[urlcercaDesc]);
  
  ////apidomicilio
  let urlcercaDomicilios="http://127.0.0.1:8000/Tiendasback/TiendaDirCatDom/"

  useEffect(()=>{
  let gus=`${urlcercaDomicilios}${lat}/${long}/${idcategori}/1/${filter}/`;
    helphttp()
    .get(gus).then((res)=>{
        if(!res.err){
          setdbdom0(res.companies)
          setError(null)
        }else{
          setdbdom0([])
          setError(res)
        }  
      })
      
},[urlcercaDomicilios]);

////apipresiobajos
let urlcercaPresbaj="http://127.0.0.1:8000/Tiendasback/TiendaDirCatDest/"

useEffect(()=>{
let gus=`${urlcercaPresbaj}${lat}/${long}/${idcategori}/2/${filter}/`;
  helphttp()
  .get(gus).then((res)=>{
      if(!res.err){
        setdbpresbaj0(res.companies)
        setError(null)
      }else{
        setdbpresbaj0([])
        setError(res)
      }  
    })
    
},[urlcercaPresbaj]);

//apipresiojusto
let urlcercaPresjus="http://127.0.0.1:8000/Tiendasback/TiendaDirCatDest/"

useEffect(()=>{
let gus=`${urlcercaPresbaj}${lat}/${long}/${idcategori}/1/${filter}/`;
  helphttp()
  .get(gus).then((res)=>{
      if(!res.err){
        setdbpresjus0(res.companies)
        setError(null)
      }else{
        setdbpresjus0([])
        setError(res)
      }  
    })
    
},[urlcercaPresjus]);

////apijoyas
let urlcercajoyas="http://127.0.0.1:8000/Tiendasback/TiendaDirCatJoy/"

useEffect(()=>{
let gus=`${urlcercajoyas}${lat}/${long}/${idcategori}/1/${filter}/`;
  helphttp()
  .get(gus).then((res)=>{
      if(!res.err){
        setdbjoyas0(res.companies)
        setError(null)
      }else{
        setdbjoyas0([])
        setError(res)
      }  
    })
    
},[urlcercajoyas]);

////apielegantes
let urlelegan="http://127.0.0.1:8000/Tiendasback/TiendaDirCatDest/"

useEffect(()=>{
  let gus=`${urlcercaPresbaj}${lat}/${long}/${idcategori}/10/${filter}/`;
  helphttp()
  .get(gus).then((res)=>{
      if(!res.err){
        setdbelg0(res.companies)
        setError(null)
      }else{
        setdbelg0([])
        setError(res)
      }  
    })
    
},[urlelegan]);

/////apipetfriend
let urlpetf="http://127.0.0.1:8000/Tiendasback/TiendaDirCatPet/"

useEffect(()=>{
let gus=`${urlpetf}${lat}/${long}/${idcategori}/1/${filter}/`;
  helphttp()
  .get(gus).then((res)=>{
      if(!res.err){
        setdbpetf0(res.companies)
        setError(null)
      }else{
        setdbpetf0([])
        setError(res)
      }  
    })
    
},[urlpetf]);




    return(
          <div>
            

            <Categoria
              
              data={dbcer0}
              dataprom={dbprom0}
              datadesc={dbdesc0}
              
              
             />
             
           
          </div>
          
    );
};
export default Apicategorias;