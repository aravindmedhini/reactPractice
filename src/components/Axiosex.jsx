import React, { useState } from "react";
//import axios from "axios";
import "./index.css";
import "./Popup.css";
import Popup from "./Popup";
import detail from "../JsonDetails/data.json";

const Axiosex = (props) => {
  let [details, setdetails] = useState("");
  let [popup, setpopup] = useState(false);
  let [image, setimage] = useState("");
  return (
    <div>
      {/* <div className="Jsondata">{details}</div> */}
      <button
        className="btn btn-danger d-inline-block"
        onClick={() => {
          setpopup(true);
          //   axios({
          //     method: "get",
          //     url: "https://jsonplaceholder.typicode.com/todos/1",
          //   }).then((res) => {
          //     console.log(res.data);
          //     setdetails(JSON.stringify(res.data));
          //   });

          detail.map((record) => {
            if (record.id === props.name) {
              setdetails(record.data);
              setimage(record.image);
            }
            return <></>;
          });
          return <></>;
        }}
      >
        DETAILS
      </button>
      <Popup trigger={popup} popuptrigger={setpopup}>
        <h1 className="popupheader">{props.name}</h1>
        <br />
        <img
          className="popupimg"
          src={image}
          alt=" not found"
          width={"200px"}
          height={"200px"}
        />
        <br />
        <p className="popuptext">
          <strong>{details}</strong>
        </p>
      </Popup>
    </div>
  );
};

export default Axiosex;
