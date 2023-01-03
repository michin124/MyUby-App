import React from "react"
import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';



const crudtablerow =(el:any)=>{
    let {nombretienda,foto,telefono,direccion,horario,domicilio,parqueadero,especialidad,id}=el.el;
    
    return(
        
            <tr>
                
                <td>{nombretienda}</td>
                <td>{foto}</td>
                <td>{telefono}</td>
                <td>{direccion}</td>
                <td>{horario}</td>
                <td>{domicilio}</td>
                <td>{parqueadero}</td>
                <td>{especialidad}</td>
                
                <td>
                    
                    <IonButton onClick={()=> el.setDataToedit(el.el)} size="small">editar</IonButton>
                    <IonButton onClick={()=> el.deleteData(id)} size="small">eliminar</IonButton>
                </td>
            </tr>
        

    )
   
}
export default crudtablerow;
