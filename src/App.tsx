import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

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
import Discover from "./pages/Discover";
import Resource from "./pages/Resource";
import Post from "./pages/Post";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <Navbar />
        <IonRouterOutlet id="main" style={{ height: "100%", overflow: "auto" }}>
          <IonContent>
            <Route path="/" exact={true}>
              <Index />
            </Route>
            <Route path="/about-us" exact={true}>
              <About />
            </Route>
            <Route path="/discover" exact={true}>
              <Discover />
            </Route>
            <Route path="/resources" exact={true}>
              <Resource />
            </Route>
            <Route path="/post/:id" exact={true}>
              <Post />
            </Route>
            <Footer />
          </IonContent>
        </IonRouterOutlet>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
