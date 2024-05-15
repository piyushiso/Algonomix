import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
    const url = "/profile/"+data.id
    return (
        data &&
        <div key={data.id} className='card'>
            <Link to={url} style={{ textDecoration: 'none' }}>
                <img src={data.image} className='image' />
                <div className='card-name-code'>
                    <p className='card-name'>{data.name}</p>
                    <p className='card-code'>{data.created} / {data.code}</p>    
                </div>
                <p className='card-tags'>{data.tags}</p>
            </Link>
        </div>
    )
}

export default Card