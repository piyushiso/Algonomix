import React from 'react'

const Bio = ({bio, resume}) => {
  return (
    <div id='bio-component' className='bio'>
        <p className='text-black-light'>{bio} { resume != '' && <a href={resume} target='_blank'>More</a>}</p>
    </div>
  )
}

export default Bio