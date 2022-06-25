import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Axiosex = () => {
  let [details, setdetails] = useState("");
  return (
    <div>
      <div className="Jsondata">{details}</div>
      <button
        className="btn btn-danger d-inline-block"
        onClick={() => {
          axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/todos/1",
          }).then((res) => {
            console.log(res.data);
            setdetails(JSON.stringify(res.data));
          });
        }}
      >
        DETAILS
      </button>
    </div>
  );
};

export default Axiosex;
