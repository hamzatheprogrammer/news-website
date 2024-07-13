import axios from 'axios'
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';

function Iosnews() {
    const [news, setNews] = useState("")

    const fetchNews = async () => {
        const response = await axios.get("https://api.maher-zubair.tech/details/ios")
        const article = response.data.result
        setNews(article)
    }
    fetchNews()






  return (
    <div>
        <h1 className='iosnews-heading'>Today latest Ios news</h1>
        <div className='iosnews-container'>
        <Card style={{ width: '70rem' }}>
      <Card.Img variant="top" src={news.images}  alt='loading............'/>
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

export default Iosnews