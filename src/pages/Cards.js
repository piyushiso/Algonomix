import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

const Cards = ({ data }) => {
    return (
        <div className='contents'>
            <Header />
            <div className='cards'>
                {

                    data.map((data, index) => (
                        <Card key={index} data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cards