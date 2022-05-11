import React, { useEffect, useState, useMemo } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function News({ category }) {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const d = new Date();
  // useEffect for fetching the news data
  useEffect(async () => {
    setLoading(true);

    //  fetch the data
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5c106cf964f84e9d9765adf9f22c518d&page=${page}&pageSize=9`;
    //TODO : Use an .env file for apiKey
    let data = await fetch(url);
    let parsedData = await data.json();

    //update the state
    setNewsArticles(newsArticles.concat(parsedData.articles));
    setLoading(false);
  }, [page]);

  // function to fetch more data
  const fetchMoreData = async () => {
    setPage(page + 1);
  };

  // useEffect for updating footer header
  // useEffect(() => {
  //     if(d.getSeconds())
  //     setInterval(()=> {
  //        footerHead = 'Top News Today'
  //     },[3000])
  // },[])

  return (
    <div>
      {/* news heading part */}
      <div className="container my-4">
        <h3 className="text-center">NewsDaily - Top {category} Headlines</h3>

        {/* news container part */}
        <div className="container">
          <div className="row">
            {newsArticles.map((element, index) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description
                        : "No description available"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://gol.bg/media/files/resized/article/600x314/dbc/1d37a7d6cd10aa81390c41df64668dbc-8010290.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {loading === true ? (
          <Spinner />
        ) : (
          <button
            className="btn btn-primary d-flex mx-auto show-more-btn fs-5"
            onClick={fetchMoreData}
          >
            Show More{" "}
            <i className="fas fa-long-arrow-alt-down mx-2 d-flex my-auto"></i>
          </button>
        )}
      </div>

      {/* footer part */}
      {/* <div className='bg-success border-1 border-dark fixed-bottom'>
                <div className="d-inline-block bg-danger px-2">
                    Top News - {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}
                </div>
            </div> */}
    </div>
  );
}

export default News;
