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
import { options } from 'ionicons/icons';
import Tab2 from '../pages/todos';

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




  function Apiofertas ()
  {

    let {search}=useLocation();
    let query=new URLSearchParams(search);
    let idcategori=query.get("idcategori");
    //uno
    const [db,setdb]=useState(initialDb)
    const [dataToedit,setDataToedit]=useState(null);
    const[error,setError]=useState(null);

    //dos
    const [db2,setdb2]=useState(initialDb)
    const[error2,setError2]=useState(null);

    //ambos
    const [db3,setdb3]=useState(initialDb)
    const[error3,setError3]=useState(null);
    let api=helphttp();
    let urlpr="http://127.0.0.1:8000/Tiendasback/Tiendar/"


    //useefect de ambos
    useEffect(()=>{ 
      let guno=`${urlpr}${4}`;
      
        helphttp()
    
        .get(guno).then((res)=>{
        
        
            if(!res.err){
          
            setdb3(res.companies)
            
            setError3(null)
            
          
            }else{
            setdb3([])
            setError3(res)
          
        }
        
      })
    
    },[urlpr]);
    //useeffect de Descuentos
    useEffect(()=>{
      let guno=`${urlpr}${2}`;
      
        helphttp()
    
        .get(guno).then((res)=>{
       
        
            if(!res.err){
          
            setdb(res.companies)
            setError(null)
            
          
            }else{
            setdb([])
            setError(res)
          
        }
        
      })
    
    },[urlpr]);

    //useefect de ofertas
    useEffect(()=>{ 
        let guno=`${urlpr}${3}`;
        
          helphttp()
      
          .get(guno).then((res)=>{
         
          
              if(!res.err){
            
              setdb2(res.companies)
              setError2(null)
            
              }else{
              setdb2([])
              setError2(res)
            
          }
          
        })
      
    },[urlpr]);

    




    return(
          <div>
     
            <Tab2 
              dataD={db}
              dataO={db2}
              data={db3}
              
              
              dataToedit={dataToedit}
              setDataToedit={setDataToedit}
              />
             
           
          </div>
          
    );
};
export default Apiofertas;