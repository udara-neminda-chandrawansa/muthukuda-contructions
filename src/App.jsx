import "./App.css";
import { Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav inLanding={true}/>
      <Switch>
        <Route path="/" component={Landing} />

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route><div className="flex items-center justify-center h-dvh bg-[#407CE0] text-white font-bold"> 404: No such page!</div></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
