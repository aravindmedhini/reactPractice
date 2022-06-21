import React, { useState } from 'react'
import "./index.css"
const Packege = (props) => {
    // const handleclick = event => {
    //     event.currentTarget.disabled = true;
    //     console.log("button clicked")
    // }

    const [disable, setdisable] = useState(false)
    return (
        <>
            <div className='border border-3 border-info packegecontainer ms-5 bg-light'>
                <div className='tripname'>
                    <p>
                        {props.name}
                    </p>
                </div>
                <button className='btn btn-info addbtn' disabled={disable} onClick={() => {
                    props.show(props.name, 1);
                    setdisable(true);
                }}>
                    Add Packege
                </button>
                {/* {places.map(title => {
                    return <div key={title}>{title}</div>;
                })} */}

            </div>
        </>
    )
}

export default Packege