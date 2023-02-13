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
import Tab2 from '../pages/Tab2';

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

    return(
          <div>
     
            <Tab2/>
             
           
          </div>
          
    );
};
export default Apiofertas;