import axios from 'axios';
import React, { useState } from 'react'
  import Card from 'react-bootstrap/Card';

function Technews() {
  const [news,setNews] = useState("")


  const fetchNews = async () => {
    try{
      const response =  await axios.get("https://api.maher-zubair.tech/details/tnews")
    const article = response.data.result
    setNews(article)
    console.log(article)
    }
    catch(err){
      console.error("Error: ", err)
    }
  }
fetchNews()





  return (
    <div>
      <h1 className='technews-heading'>Today Latest Tech-News</h1>
      <div className='technews-container'>
      <Card style={{ width: '100' }}>
      <Card.Img variant="top" src={news.img}  alt='loading............'/>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          {news.desc}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Technews