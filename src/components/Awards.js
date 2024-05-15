import React from 'react'

const Awards = ({awards}) => {
    let award = awards.filter((v, i) => i < 2)

    return (
        award[0].title != "" &&
        <div id="awards-component">
            <div className='subheading-black'>
                <p>AWARDS & CERTIFICATIONS</p>
            </div>
            <div className=''>
                <div>
                    {award.map((e, index) => (
                        <div key={index}>
                            <p className='text-black-regular'>{e.title}<span className='text-black-light'>{e.appendix !== '' && '/ ' + e.appendix}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Awards