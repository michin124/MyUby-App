import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';


import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Tab1 from '../pages/Tab1';

import CrudTabla from './crudtabla';
import { Console } from 'console';
import { helphttp } from '../helpers/helphttp';
import { options } from 'ionicons/icons';
import Mytiendas from '../pages/Mytiendas';

const initialDb=[
  {
    id: 0,
    tipocategoria: "",
      
  }
]
const initialDbt=[
  {
    id: null,
    nombretienda: "",
    foto: "",
    telefono: "",
    direccion: "",
    horario: "",
    domicilio: false,
    parqueadero:false ,
    especialidad: "",
    lat:0,
    lng:0,
    descripcion:""
      
  }
]
  function Apimis ()
  {

    const [db,setdb]=useState(initialDb)
    const [dbt,setdbt]=useState(initialDbt)
    const [dataToeditt,setDataToeditt]=useState(null);
    const[errort,setErrort]=useState(null);
    const [dataToedit,setDataToedit]=useState(null);
    const[error,setError]=useState(null);
    let api=helphttp();
    let url="http://127.0.0.1:8000/Categorias/Categorias/"
    let urltiendas="http://127.0.0.1:8000/Tiendasback/Tienda/"


    useEffect(()=>{
      helphttp()
      .get(url).then((res)=>{

        if(!res.err){
          setdb(res.Categorias)
          setError(null)
        }else{
          setdb([])
          setError(res)
        }
      })
  },[url]);
  
   useEffect(()=>{
      helphttp()
      .get(urltiendas).then((res)=>{

        if(!res.err){
          setdbt(res.tiendas)
          setErrort(null)
        }else{
          setdbt([])
          setErrort(res)
        }
      })
  },[urltiendas]);





    return(
          <div>
            <Mytiendas/>

            
            
          </div>
          
    );
};
export default Apimis;