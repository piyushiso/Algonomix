import React from 'react'

const Image = ({image}) => {
  return (
    <div id='image-component' className='image'>
        <img src={image} alt="STUDENT IMAGE" />
    </div>
  )
}

export default Image