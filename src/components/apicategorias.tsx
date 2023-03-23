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

    //distancia
    const [dbcerdis0,setdbcerdis0]=useState(initialDb)
    const [dbpromdis0,setdbpromdis0]=useState(initialDb)
    const [dbdescdis0,setdbdescdis0]=useState(initialDb)
    const [dbdomdis0,setdbdomdis0]=useState(initialDb)
    const [dbpresbajdis0,setdbpresbajdis0]=useState(initialDb)
    const [dbpresjusdis0,setdbpresjusdis0]=useState(initialDb)
    const [dbjoyasdis0,setdbjoyasdis0]=useState(initialDb)
    const [dbelegsdis0,setdbelgdis0]=useState(initialDb)
    const [dbpetfdis0,setdbpetfdis0]=useState(initialDb)


    const[error,setError]=useState(null);
    let api=helphttp();

  //apicerca
  let urlCerca="http://127.0.0.1:8000/Tiendasback/TiendaDirCat/"

    useEffect(()=>{
    let guno=`${urlCerca}${lat}/${long}/${idcategori}/${filter}/`;
    
      helphttp()
      .get(guno).then((res)=>{
          if(!res.err){
            setdbcer0(res.tiendas)
           
            setdbcerdis0(res.distancia)
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
            setdbprom0(res.tiendas)
            setdbpromdis0(res.distancia)
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
            setdbdesc0(res.tiendas)
            setdbdescdis0(res.distancia)
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
          setdbdom0(res.tiendas)
          setdbdomdis0(res.distancia)
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
        setdbpresbaj0(res.tiendas)
        setdbpresbajdis0(res.distancia)
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
        setdbpresjus0(res.tiendas)
        setdbpresjusdis0(res.distancia)
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
        setdbjoyas0(res.tiendas)
        setdbjoyasdis0(res.distancia)
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
        setdbelg0(res.tiendas)
        setdbelgdis0(res.distancia)
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
        setdbpetf0(res.tiendas)
        setdbpetfdis0(res.distancia)
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
              datadis={dbcerdis0}
              dataprom={dbprom0}
              datapromdis={dbpromdis0}
              datadesc={dbdesc0}
              datadescdis={dbdescdis0}
              dbdom0={dbdom0}
              dbdomdis0={dbdomdis0}
              dbpresbaj0={dbpresbaj0}
              dbpresbajdis0={dbpresbajdis0}
              dbpresjus0={dbpresjus0}
              dbpresjusdis0={dbpresjusdis0}
              dbpetf0={dbpetf0}
              dbpetfdis0={dbpetfdis0}
              dbelegs0={dbelegs0}
              dbelegsdis0={dbelegsdis0}
              dbjoyas0={dbjoyas0}
              dbjoyasdis0={dbjoyasdis0}
              
              
             />
             
           
          </div>
          
    );
};
export default Apicategorias;