import React, { useState } from "react";
import "./components/index.css";
import Packege from "./components/Packege";
import Parent from "./components/Parent";
import Header from "./components/Header"
import { tournameContext, countContext } from "./components/AppContext";
import Footer from "./components/Footer";
const App = () => {
  const arr = [];
  const [tourname, settourname] = useState(arr);
  const [count, setcount] = useState(0);
  return (
    <div>
      <Header />
      <h1 className="position-absolute  packHead">
        SELECT YOUR PACKEGE
      </h1>
      {/* passing props using Context API */}

      <tournameContext.Provider value={tourname}>
        <countContext.Provider value={count}>
          <Parent />
        </countContext.Provider>
      </tournameContext.Provider>

      <div className="d-block packContainer">
        <Packege
          name="WORLD_TOUR"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);

          }}
        />
        <Packege
          name="INDIA"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="UNITED_STATES"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="MALAYSIA"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="PARIS"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="AUSTRALIA"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="MOSKO"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="TOKYO"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="BERLIN"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="HYDERABAD"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="NAIROBI"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="CANYA"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
        <Packege
          name="JAPAN"
          show={(packname, incriment) => {
            // settourname(tourname.push(packname));
            const setarray = () => {
              settourname(arr => [...arr, packname]);
            }
            setarray();
            setcount(count + incriment);

          }}
          delete={(packname, deccriment) => {
            setcount(count - deccriment);
            // console.log(index);
            let filteredArray = tourname.filter(item => item !== packname)
            settourname(filteredArray);
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
