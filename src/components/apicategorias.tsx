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
    
    const [db,setdb]=useState(initialDb)
    const [dataToedit,setDataToedit]=useState(null);
    const[error,setError]=useState(null);
    let api=helphttp();
    let url="http://127.0.0.1:8000/Tiendasback/Tiendas/"

    useEffect(()=>{
    let guno=`${url}${idcategori}`;
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
        
  },[url]);
  
  

//crear nuevo registro
const createData = (data:any) => {
  
  data.id=Date.now();
  //para traer el json es una cabecera
    let options={
      body:data,
        headers:{"content-type":"aplication/json"},
    }
    //put en vez de post(funcion que reconoce la base)
    api.post(url,options).then((res)=>{

   
      if(!res.err){
        //db lo conbina con res osea el contenido
        setdb([...db,res]);
        
      }else
      {
        //si res es un error pues lo manifiesta como un mago
        setError(res);
      }
    });
  //let newData=db.map(el =>el.id===data.id?data:el);
  //
};
//actualizar un registro o cambiarlo 
const updateData = (data:any) => {
  //union de la url con el id con el fin de editar el que es
  let endpoint=`${url}${data.id}`;
  
    let options={
      body:data,
      headers:{"content-type":"aplication/json"},
    }
    //put en vez de post(funcion que reconoce la base)
    api.put(endpoint,options).then((res)=>{

   
      if(!res.err){
        //detectar cual es el id que viene, osea lo encuentre y lo actualice
        let newData=db.map(el =>el.id===data.id?data:el);
        //db lo conbina con res osea el contenido
        setdb(newData);
        
      }else
      {
        //si res es un error pues lo manifiesta como un mago
        setError(res);
      }
    });
  //let newData=db.map(el =>el.id===data.id?data:el);
  //
};

const deleteData = (id:any) => {

  

  let isDelete= window.confirm('estas seguro de eliminar el usuario con id '+id+'?');

  if(isDelete)
  {
    let endpoint=`${url}${id}`;
    //no necesita id a eliminar porque el id es especifico
    let options={
      
      headers:{"content-type":"aplication/json"},
    }

    //aqui en endpoint
    api.del(endpoint,options).then((res)=>{
      if(!res.err){
        //detectar cual es el id que necesitamos, lo quitamos de nuestra veariable de estado 
        let newData=db.filter(el =>el.id!==id);
        //db lo conbina con res osea el contenido
        setdb(newData);
        
      }else
      {
        //si res es un error pues lo manifiesta como un mago
        setError(res);
      }
      
    })

    let newData=db.filter(el=>el.id!==id);
      setdb(newData);

  }
};

    return(
          <div>
            

            <Categoria
              
              data={db}
              createData={createData} 
              updateData={updateData}
              dataToedit={dataToedit}
              setDataToedit={setDataToedit}
             />
             
           
          </div>
          
    );
};
export default Apicategorias;