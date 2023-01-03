import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import { key } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Crudtablerow from './crudtablerow';


const CrudTabla =(data:any)=>
{
   
    return(
          <div>
            <h3>tablas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.length>0?(
                        data.data.map((el:any)=>(<Crudtablerow key={Math.random()} el={el} setDataToedit={data.setDataToedit} deleteData={data.deleteData}/>))
                    
                   
                    ):(
                        
                        <tr>
                            <td colSpan={3}>sindatos</td>
                        </tr>
                    )}
                </tbody>             
            </table>
            
            
          </div> 
         
    );
   
};
export default CrudTabla;