import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div>
            <div className='d-flex bg-light'>
                <div className="img">
                <img src="./Images/404page.png" />
                </div>
                <div className='my-auto'>
        <div>
            
                    <h3>This page could not be found</h3>
                    <span>You can go to <Link to="/">Home</Link> Page</span></div>
                </div>
            </div >
        </div>
    )
}

export default Page404
