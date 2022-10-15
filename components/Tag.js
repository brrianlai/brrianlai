import React from 'react'

const Tag = ({ content, children }) => {
    return (
        <div className='tag'>
            <h6>
                {content}
            </h6>
        </div>
    )
}

export default Tag