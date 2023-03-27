import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import React, { useState,useRef,useCallback, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { IoBeer } from "react-icons/io5";
import { FcGlobe} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";


import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import CrudForm from './crudform';
import CrudTabla from './crudtabla';
import { Console } from 'console';
import { helphttp } from '../helpers/helphttp';
import { options } from 'ionicons/icons';
import { useHistory, useLocation} from 'react-router';

const initialDb1=[
  {
    id: 0,
    tipocategoria: "",
      
  }
]



  const CrudAppi= (props:any) =>
  {
    let {search}=useLocation();
    let query=new URLSearchParams(search);
    let valid=query.get("succes")||false;
    const initialDb=[
      {
        id: null,
        nombretienda: "asdf",
        foto: "asd",
        telefono: "asd",
        direccion: "asd",
        horario: "asd",
        domicilio: "asd",
        parqueadero:"asd" ,
        especialidad: "asd",
        lat:0,
        lng:0,
        descripcion:"",
        categoria:"",
        imagen:undefined
          
      }
    ]

    let History=useHistory();
    const mapRef:any = useRef(null);
    const [position, setPosition] = useState({
      lat: 4.578283266357103,
      lng: -74.11971172280586
    });
    const containerStyle = {
      width: '350px',
      height: '300px'
    };
   
    const handleLoad = (map:any) => {
      mapRef.current = map;
    }
  
    const handleCenterChanged = () => {
      if (!mapRef.current) return;
      const newPos = mapRef.current.getCenter().toJSON();
      setPosition(newPos);
  
    }



    const [db,setdb]=useState(initialDb)
    const [dataToedit,setDataToedit]=useState(null);
    const[error,setError]=useState(null);
    const [db1,setdb1]=useState(initialDb1)
    const [dataToedit1,setDataToedit1]=useState(null);
    const[error1,setError1]=useState(null);
    let api=helphttp();
    
    let url="http://127.0.0.1:8000/Tiendasback/Tiendas/"
    let url1="http://127.0.0.1:8000/Categorias/Categorias/"


    useEffect(()=>{
      helphttp()
      .get(url1).then((res1)=>{
       
        
        if(!res1.err){
          
          setdb1(res1.Categorias)
          
          setError1(null)
          
        }else{
          setdb1([])
          setError1(res1)
        }
      })
  },[url1]);

    useEffect(()=>{
      helphttp()
      .get(url).then((res)=>{
       
        
        if(!res.err){
          
          setdb(res.tiendas)
          
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
            {valid==false&&
              <IonRow>
                <h2>CRUDD APP</h2> 
                
                <CrudForm 
                  center={{ lat: 4.578283266357103, lng: -74.11971172280586 }}
                  data1={db1}
                  data={db}
                  createData={createData} 
                  updateData={updateData}
                  dataToedit={dataToedit}
                  setDataToedit={setDataToedit}
                  id={props.id[0].id}
                />
             <CrudTabla  
            data={db}
            setDataToedit={setDataToedit}
            deleteData={deleteData}/>

              </IonRow>


            }
            {valid!=false&&
            <IonRow style={{alignItems:'center',justifyContent:'center'}}>
              <BsFillEmojiSunglassesFill style={{marginTop:'30%',color:'yellow'}} size={'100px'}></BsFillEmojiSunglassesFill>
              <h1 style={{fontSize:'25px',marginLeft:'5%',marginTop:'0%',marginRight:'5%',textAlign:'center'}}>Gracias por subir tu tienda a la familia MyUby, puedes administrar tus tiendas </h1>
              <IonButton href={`/mytiendas/`} className='congratulations' style={{backGround:'blue'}}  >Aqui</IonButton>
            </IonRow>
              
            }
            
            
            
            
           
          </div>
          
    );
}
export default CrudAppi;
