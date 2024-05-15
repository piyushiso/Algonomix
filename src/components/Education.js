import React from 'react'

const Education = ({grad, undergrad}) => {
  return (
    <div id='education-component'>
            <div className='leftHeader heading-primary'>
                <p>EDUCATION</p>
            </div>
            <div className='leftContents'>
                <ul>
                    {
                    grad !== '' &&
                    <li>
                        <p class='subheading-white'>{grad.title}</p>
                        <p class='text-white-light'>{grad.college}</p>
                    </li>
                    }
                    <li>
                        <p class='subheading-white'>{undergrad.title}</p>
                        <p class='text-white-light'>{undergrad.college}</p>
                    </li>
                </ul>

            </div>
        </div>
  )
}

export default Education