import React, { useState } from 'react'
import Axiosex from './Axiosex'
import "./index.css"
const Packege = (props) => {

    const [disable, setdisable] = useState(false)
    return (
        <>
            <div className='border border-3 border-info packegecontainer ms-5 bg-light'>
                <div className='tripname'>
                    <p>
                        {props.name}
                    </p>
                </div>
                <div className='detailsbtn'>
                    <Axiosex />
                </div>
                <button className='btn btn-info addbtn' disabled={disable} onClick={() => {
                    props.show(props.name, 1);
                    setdisable(true);
                }}>
                    Add Packege
                </button>
            </div>
        </>
    )
}

export default Packege