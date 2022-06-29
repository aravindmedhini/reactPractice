import React, { useContext } from 'react'
import { tournameContext, countContext } from "./AppContext";
import "./index.css";
const Child = () => {
    const tourname = useContext(tournameContext);
    const tourcount = useContext(countContext);
    return (
        <span className="seleContainer">
            <div className="showselected position-absolute top-0 end-0">
                <h3>{tourcount} out of 13</h3>
                <h4>selected packeges:</h4>
                <h5 className="content">
                    <div>
                        {tourname.map((title) => {
                            return (<div key={title}>
                                <ul key={title}>
                                    <li key={title}>
                                        {title}
                                    </li>
                                </ul>
                            </div>)
                        })}
                    </div>
                </h5>
            </div>
        </span>
    )
}

export default Child