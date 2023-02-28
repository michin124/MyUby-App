import { IonContent, IonHeader, IonPage, IonTitle,IonToggle,IonRadio,IonCheckbox, IonToolbar,IonButton,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState ,useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IoBeer } from "react-icons/io5";
import MyComponent from '../helpers/maps';
import { FcGlobe} from "react-icons/fc";
import { FiCoffee} from "react-icons/fi";
import { FaBed} from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import { FaPencilRuler} from "react-icons/fa";
import { FaBriefcase} from "react-icons/fa";
import { MdPets} from "react-icons/md";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineStorefront} from "react-icons/md";

import './Tap5.css';
import { useParams } from 'react-router';
import { Console } from 'console';
import { useHistory, useLocation} from 'react-router';
import { reload } from 'ionicons/icons';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const Tab5= (el:any) => {
  
 
  
  return (
    
    
    <IonPage>
      
      <IonHeader class='header'>
      <IonRow class='header2'>
      {/* <IonCol class="x"><FcGlobe size="50"></FcGlobe></IonCol>
      <IonCol class="x2"><h2>ADRESS</h2></IonCol> */}
      <IonCol class="x3"><b className="x3">MyUby</b></IonCol>
      </IonRow>  
      </IonHeader>


      <IonContent fullscreen>
      <Swiper
        slidesPerView={3}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        
        
        pagination={true}
        modules={[ Pagination]}
        className="mySwiper"
        style={{height:'100px'}}
      >
        <SwiperSlide style={{height:'100px',width:'150px'}}>
            <IonCard button={true}style={{height:'100px',width:'400px'}} >
                <img alt="Silhouette of mountains" style={{height:'100px',width:'300px'}} src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:'100px',width:'150px'}}>Slide 9</SwiperSlide>
      </Swiper>


      </IonContent>
    </IonPage>
  );
};

export default Tab5;









