// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import InfoSection from "./InfoSection";
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

function App() {
  return (
    <div className="App">
      <Header />
      <InfoSection />
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
          {/* <Route path="/" element={<All />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <GodsIdentity /> */}
    </div>
  );
}

function WelcomePage() {
  return (
    <section>
      <p>Welcome </p>
    </section>
  );
}

export default App;
