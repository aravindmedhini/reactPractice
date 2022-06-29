import React, { useState } from 'react'
import Axiosex from './Axiosex'
import "./index.css"

const Packege = (props) => {
    const [disable, setdisable] = useState(false)
    const [disabledel, setdisabledel] = useState(true)
    return (
        <>
            <div className='border border-3 border-info packegecontainer ms-5 bg-light'>
                <div className='tripname'>
                    <p>
                        {props.name}
                    </p>
                </div>
                <div className='detailsbtn'>
                    <Axiosex name={props.name} />
                </div>
                <button className='btn btn-info addbtn' disabled={disable} onClick={() => {
                    props.show(props.name, 1);
                    setdisable(true);
                    setdisabledel(false);
                }}>
                    Add Packege
                </button>
                <button className='btn btn-danger deletebtn' disabled={disabledel} onClick={() => {
                    setdisable(false)
                    props.delete(props.name, 1);
                    setdisabledel(true);
                }}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </>
    )
}

export default Packege