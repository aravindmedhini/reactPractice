import React from 'react'
import "./Popup.css"
const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <h1 className='popup-close' onClick={() => props.popuptrigger(false)}> X </h1>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup