import { BrowserRouter, Routes, Route } from "react-router-dom";
import
{
  About,
  Contact,
  EcoNavbar,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Observation,
  Tech,
  Works,
  StarsCanvas,
  Eco,
} from "./components";
import Rebrands from "./components/Rebrands";

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eco" element={ <Ecoproj /> } />
        <Route path="/obs" element={ <Obs /> } />
        <Route path="/rebrands" element={ <RebSSO /> } />
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
};

function Home()
{
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

function Ecoproj()
{
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <EcoNavbar />
          <Eco />
        </div>
      </div>
    </>
  );
}

function Obs()
{
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <EcoNavbar />
          <Observation />
        </div>
      </div>
    </>
  );
}

function RebSSO()
{
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <EcoNavbar />
          <Rebrands />
        </div>
      </div>
    </>
  );
}

export default App;
