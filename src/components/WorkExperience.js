import React from 'react'

const WorkExperience = ({experience}) => {
    
    let exp = experience.filter((v, i) => i < 2)

    let style = exp.length === 2 ? { height: '250px' } : { height: '180px' }

    return (
        exp[0].title != "" &&
        <div id="workExperience-component" style={style}>
            <div className='rightHeader heading-black'>
                <p>WORK EXPERIENCE</p>
            </div>
            <div className='rightContents'>
                {exp.map((e, index) => (
                    <div key={index}>
                        <p className='subheading-black'>{e.title}</p>
                        <p className='text-black-light'>{e.place}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience