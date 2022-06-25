import React, { useContext } from 'react'
import { tournameContext, countContext } from "./AppContext";
import "./index.css";
const Child = () => {
    const tourname = useContext(tournameContext);
    const tourcount = useContext(countContext);
    return (
        <span className="showselected position-absolute top-0 end-0">
            <h3>{tourcount} out of 5</h3>
            <h5 className="content">{tourname}</h5>
        </span>
    )
}

export default Child