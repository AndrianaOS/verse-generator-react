// import logo from "./logo.svg";
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
        </Routes>
      </BrowserRouter>
      {/* <GodsIdentity /> */}
    </div>
  );
}

export default App;
