import React from 'react'

const Card = ({dogImage}) => {
    return(
        <div className='card'>
            <img
            src={dogImage}
            alt={dogImage}
            />
            
        </div>
    )
}
export default Card