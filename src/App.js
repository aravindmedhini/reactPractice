import React, { useEffect, useState } from "react";
import "./index.css";
import Packege from "./Packege";
import Parent from "./Parent";
import { tournameContext, countContext } from "./AppContext";
import Axiosex from "./Axiosex";
const App = () => {
  useEffect(() => {
    alert("WELCOME To Wonder Tour Please Select Your Packeges");
  }, []);
  const [tourname, settourname] = useState("selectedPackeges:");
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="position-absolute top-0 start-50 translate-middle-x">
        SELECT YOUR PACKEGES
      </h1>

      {/* passing props using Context API */}

      <tournameContext.Provider value={tourname}>
        <countContext.Provider value={count}>
          <Parent />
        </countContext.Provider>
      </tournameContext.Provider>

      <div className="mt-5 position-absolute top-50 start-0 translate-middle-y">
        <Packege
          name="WORLD_TOUR"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
        <Packege
          name="INDIA"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
        <Packege
          name="UNITED_STATES"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
        <Packege
          name="MALAYSIA"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
        <Packege
          name="PARIS"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
        <Packege
          name="HYDERABAD"
          show={(packname, incriment) => {
            settourname(tourname + "  " + packname);
            setcount(count + incriment);
          }}
        />
      </div>
    </div>
  );
};

export default App;
