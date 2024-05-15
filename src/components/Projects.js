import React from 'react'

const Projects = ({ projects }) => {
    let proj = projects.filter((v, i) => i < 2)

    return (
        proj[0].title != "" &&
        <div id="projects-component">
            <div className='subheading-black'>
                <p>PROJECTS</p>
            </div>
            <div className=''>
                <div>
                    {proj.map((e, index) => (
                        <div key={index}>
                            <p className='text-black-regular'>{e.title}<span className='text-black-light'>{e.appendix !== '' && ': ' + e.appendix}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects