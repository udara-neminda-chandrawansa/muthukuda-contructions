import "./App.css";
import logo from "./assets/logo.png";
import { Route, Switch } from "wouter";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactForm from "./pages/Contact";
import Projects from "./pages/Projects";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav inLanding={true}/>
      <Switch>
      <Route path="/" component={Landing} />
      <Route path="/aboutus" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/projects" component={Projects} />

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route><div className="flex items-center justify-center h-dvh bg-[#407CE0] text-white font-bold"> 404: No such page!</div></Route>
      </Switch>
      <Footer />
      <FloatingWhatsApp phoneNumber="+94713458438" accountName="Muthukuda Constructions Agent" avatar={logo} statusMessage="Online"/>
    </>
  );
}

export default App;
