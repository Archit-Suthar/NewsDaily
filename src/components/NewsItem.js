import React from 'react'

function NewsItem({ title, description, newsUrl, imageUrl, author, date }) {
    return (
        
        <div>
            {/* {console.log("description : ",description)} */}
            <div className="my-3 newscard">
                <div className="card mx-4 h-100">

                    <img
                        src={imageUrl}
                        alt='Some Error Occured - No Image to show'
                        style={{ maxHeight: "200px" }}
                    />

                    <div className="card-body">
                        <h5 className="card-title"><strong>{title.length >= 45 ? title.slice(0, 45) : title}</strong>...</h5>

                        <p className="description"><i className="fas fa-long-arrow-alt-right"></i> {(description === "") ? "No description" : (description.length >= 120 ? (title.length >= 40 ? description.slice(0, 80) : description.slice(0, 120)) : description)}...</p>

                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary btn-newscard">
                            Read More
                        </a>

                    </div>


                    <div className="card-footer">
                        <p className="card-text mb-2"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small> </p>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsItem
