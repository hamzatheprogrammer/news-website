import React from 'react'
import axios from 'axios';
import { useState } from "react";

function Home() {
    const [news, setNews] = useState([])
    const [fetched, setFetched] = useState(false)

    const fetchNews = async () => {
        const response = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=mRjJfzEFUvUGJJl2MOpokCV8c8aFgiLK")
        const articles = response.data.results
        setNews(articles)
        

    }
    if (!fetched){
        fetchNews()
        setFetched(true)
    }





  return (
    <div>
        <h1 className='homepage-heading'>Latest news</h1>
        <div className="cards-div">
            {news.map((article, index) => (
                <div className="card" key={index} style={{width: "20rem"}}>
                <img src={article.media && article.media[0] ? article.media[0]['media-metadata'][2].url : 'placeholder.jpg'} className="card-img-top" alt={article.title}/>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.abstract}</p>
                  <a href={article.url} className="btn btn-primary">Read More</a>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Home