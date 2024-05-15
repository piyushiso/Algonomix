import React from 'react'
import Projects from './Projects'
import Awards from './Awards'
import Involvement from './Involvement'

const Additions = ({ additions }) => {

    const projects = additions.projects
    const awards = additions.awards
    const involvements = additions.involvement

    return (
        <div id="additions-component">
            <div className='rightHeader heading-black'>
                <p>NOTEWORTHY ADDITIONS</p>
            </div>
            <div className='rightContents'>
                {/* PROJECTS */}
                {projects.length !== 0 && <Projects projects={projects} />}
                {/* AWARDS */}
                {awards.length !== 0 && <Awards awards={awards} />}
                {/* INVOLVEMENT */}
                {involvements.length !== 0 && <Involvement involvements={involvements} />}
            </div>
        </div>
    )
}

export default Additions