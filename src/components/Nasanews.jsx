import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';

function Nasanews() {
    const [news, setNews] = useState("")

    const fetchnews = async () => {
        const response = await axios.get("https://api.maher-zubair.tech/details/nasa")
        const articles = response.data.result
        setNews(articles)
    }
    fetchnews()

  return (
    <div>
        <h1 className='Nasanews-heading'>Today latest Nasa-newss</h1>
        <div className="nasanews-container">
        <Card style={{ width: '70rem' }}>
      <Card.Img variant="top" src={news.hdurl}  alt='loading............'/>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          {news.explanation}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default Nasanews