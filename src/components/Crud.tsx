import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';


import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import CrudForm from './crudform';
import CrudTabla from './crudtabla';
import { Console } from 'console';



const initialDb=[
  {
    id:1,
    name:"seiya",
    constellation:"pegaso",
  },
  {
    id:2,
    name:"seya",
    constellation:"pegaso",
  },
  {
    id:3,
    name:"sya",
    constellation:"pegaso",
  }
]


function CrudApp ()
{
  const [db,setdb]=useState(initialDb)
  const [dataToedit,setDataToedit]=useState(null);
  
  
  const createData = (data:any) => {
    data.id=Date.now();
    
    setdb([...db,data]);
    
    
  };

  const updateData = (data:any) => {
  let newData=db.map(el =>el.id===data.id?data:el);
  setdb(newData);
};
  const deleteData = (id:any) => {
    let isDelete= window.confirm('estas seguro de eliminar el usuario con id '+id+'?');

    if(isDelete)
    {
     
      let newData=db.filter(el=> el.id !== id);
      setdb(newData);
    }else{
      return;
    }
  };
  
    return(
          <div>
            
            <h2>CRUDD APP</h2> 
            
            
            <CrudForm createData={createData} 
             updateData={updateData}
             dataToedit={dataToedit}
             setDataToedit={setDataToedit}
             />
            <CrudTabla  
            data={db}
            setDataToedit={setDataToedit}
            deleteData={deleteData}/>
          </div>
          
    );
};
export default CrudApp;