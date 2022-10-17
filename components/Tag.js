import React from 'react'

const Tag = ({ children }) => {
    return (
        <div className='tag'>
            <h6>{children}</h6>
        </div>
    )
}

export default Tag