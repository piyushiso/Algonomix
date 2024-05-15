import React from 'react'

const Involvement = ({ involvements }) => {
    let involvement = involvements.filter((v, i) => i < 2)
    return (
        involvement[0].title != "" &&
        <div id="involvements-component">
            <div className='subheading-black'>
                <p>INVOLVEMENT</p>
            </div>
            <div className=''>
                <div>
                    {involvement.map((e, index) => (
                        <div key={index}>
                            <p className='text-black-regular'>{e.title}<span className='text-black-light'>{e.appendix !== '' && '/ ' + e.appendix}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Involvement