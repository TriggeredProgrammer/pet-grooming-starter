import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Appoinment from "./components/Appointment";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      {/* <Appoinment/> */}

      <Prices/>
      <Footer/>
      {/* <div className="h-[2000px]"></div> */}
    </div>
  );
};

export default App;
