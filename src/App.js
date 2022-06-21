import React, { useEffect, useState } from "react";
import "./index.css";
import Packege from "./Packege";
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
      <span className="showselected position-absolute top-0 end-0">
        <h3>{count} out of 6</h3>
        <h5 className="content">{tourname}</h5>
      </span>
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
