import React from 'react';


const myName = (props) => {
    return ( 
        <div className='myName'>
                <h4 className='firstName'>{props.firstName}</h4>
                <h4 className='lastName'>{props.lastName}</h4>
        </div>
     );
}
 
export default myName;