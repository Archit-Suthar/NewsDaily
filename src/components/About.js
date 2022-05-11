import React from 'react'

function About() {
    return (
        <div className='container my-5 about bg-light'>
            <h2 className='text-center fw-bold'>About</h2>
            <hr/>
            <div className="container about-content fs-4 m-1">
                
                <div className="fs-5">
                    👉 <a href='/'>NewsDaily</a> is the place where you can read the latest news on your device from the comfort of your home. You can find here news for all the catgories like sports, entertainment, health, science and technology, business etc.
                    <br/>
                    👉 News API provided by <a href='https://newsapi.org/' target="_blank">newsapi.org</a> is used in this website. 
                    
                </div>
                <hr/>
                <div className="me fs-5 text-center">Project by <a href='https://www.linkedin.com/in/archit-suthar-3169a3213/' target="_blank">Archit</a> 👩‍💻</div>
            
            </div>
           
        </div>
    )
}

export default About
