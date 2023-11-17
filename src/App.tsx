import { IonApp, IonContent, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/tailwind.css";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Feed from "./pages/Feed";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Navbar />
        <IonRouterOutlet id="main" style={{ height: "100%", overflow: "auto" }}>
          <IonContent>
            <Route path="/" exact={true}>
              <Index />
            </Route>
            <Route path="/about-us" exact={true}>
              <About />
            </Route>
            <Route path="/feed" exact={true}>
              <Feed />
            </Route>
            <Footer />
          </IonContent>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;