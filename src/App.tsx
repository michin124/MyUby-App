import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { FcHome} from "react-icons/fc";
import { AiTwotoneTags,AiOutlineHome} from "react-icons/ai";
import { CgProfile} from "react-icons/cg";
import '../src/appo.css';
import Tab1 from './pages/Tab1';
import todos from './pages/todos';
import Inicion from './pages/login'
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import tienda from './pages/tienda';
import sobretienda from './pages/sobretienda';
import Categoria from './pages/categoria';
import mydatos from './pages/mydatos';
import necesitasa from './pages/necesitasa';
import inicio from './pages/inicio';
import CrudForm from './components/Crud';

import Apitienda from './components/apitienda';
import Apinicio from './components/apinicio';
import Apicategorias from './components/apicategorias';
import Apisobretienda from './components/apisobretienda';
import Apiofertas from './components/apiofertas';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/todos/:filtro" component={Apiofertas} exact={true} />
          <Route path="/necesitasa" component={necesitasa} />
          <Route path="/holu" component={Inicion} />
          <Route path="/tab3" component={Tab3} exact={true} />
          <Route path="/tab2/:id" component={Apiofertas} />
          <Route path="/tab1/" component={Apinicio} exact={true} />
          <Route path="/tab1/:ini" component={Apinicio} exact={true} />
          
          <Route path="/productostienda" component={Apitienda}/>
          <Route path="/infotienda" component={Apisobretienda}/>
          <Route path="/tab1/logo/:categori" component={Apicategorias}/>
          <Route path="/logo6" component={Tab3} />
          <Route path="/mydatos" component={mydatos} />
         
          <Route path="/inicio" component={inicio} />
          
          <Route path="/tab3">
            <Tab3 />
          </Route>

          
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom" className="abajo">
          <IonTabButton tab="tab1" href="/tab1/" className="abajo">
            <AiOutlineHome size="50"></AiOutlineHome>
            <IonLabel>HOME</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/todos/Todos" className="abajo">
            <AiTwotoneTags size="50"></AiTwotoneTags>
            <IonLabel>OFFERS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3/" className="abajo">
            <CgProfile size="50"></CgProfile>
            <IonLabel>PERFIL</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
