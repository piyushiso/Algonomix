import React from 'react'

const Skill = ({ skill }) => {
    return (
        <div id='skill-component'>
            <div className='leftHeader heading-primary'>
                <p>SKILL SET</p>
            </div>
            <div className='leftContents'>
                <span className='text-white-light'>{skill}</span>
            </div>
        </div>
    )
}

export default Skill