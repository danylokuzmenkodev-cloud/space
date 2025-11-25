import "./App.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
