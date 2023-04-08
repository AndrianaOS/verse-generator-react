// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import InfoSection from "./InfoSection";
import GodsIdentity from "./GodsIdentity";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <InfoSection />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quotes/search" element={<GodsIdentity />} />
          {/* <Route path="/quotes" element={<AllQuotes />} /> */}
        </Routes>
      </BrowserRouter>
      <GodsIdentity />
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
