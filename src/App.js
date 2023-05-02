import "./App.css";
import Header from "./Header";
import WelcomePage from "./WelcomePage";
import GodsIdentity from "./GodsIdentity";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Covenant from "./Covenant";
import Deliverance from "./Deliverance";
import Salvation from "./Salvation";
import Transformation from "./Transformation";
import Blessings from "./Blessings";
import Ministry from "./Ministry";
import Governance from "./Governance";
import Help from "./Help";
import Healing from "./Healing";
import Discipline from "./Discipline";
import Boundaries from "./Boundaries";
import Standards from "./Standards";
import Repentance from "./Repentance";
import Promises from "./Promises";
import Grace from "./Grace";
import Purpose from "./Purpose";
import Freedom from "./Freedom";
import Marriage from "./Marriage";
import Fellowship from "./Fellowship";
import Leadership from "./Leadership";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/identity" element={<GodsIdentity />} />
          <Route path="/covenant" element={<Covenant />} />
          <Route path="/deliverance" element={<Deliverance />} />
          <Route path="/salvation" element={<Salvation />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/blessings" element={<Blessings />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/help" element={<Help />} />
          <Route path="/healing" element={<Healing />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/boundaries" element={<Boundaries />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/repentance" element={<Repentance />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/grace" element={<Grace />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/freedom" element={<Freedom />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/fellowship" element={<Fellowship />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </BrowserRouter>
      {/* <GodsIdentity /> */}
    </div>
  );
}

export default App;
