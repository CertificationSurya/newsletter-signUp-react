import React from 'react'
import iconList from '../assets/images/icon-list.svg'
const TextDetails = () => {
    
    return (
        <div className='TextDetails'>
            <div>
                <h1 className=' | bold'>Stay updated!</h1>
                <p className="small heading-detail" >
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>

            <section className='offerings'>
                <ul className='d-flex'>
                    <li className='small' style={{ listStyle: 'none' }}> <img src={iconList} alt='list sign' /> Product discovery and building what matters </li>
                    <li className='small' style={{ listStyle: 'none' }}> <img src={iconList} alt='list sign' /> Measuring to ensure updates are a success</li>
                    <li className='small' style={{ listStyle: 'none' }}> <img src={iconList} alt='list sign' /> And much more!</li>
                </ul>
            </section>

        </div>
    )
}

export default TextDetails
