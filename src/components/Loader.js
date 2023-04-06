import React from 'react'
import loader3 from '../components/loader3.gif'


const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader3} alt='loader' />
            <h1>
                Fetching data
            </h1>
        </div>
    )
}

export default Loader