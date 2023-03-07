import { useEffect, useState } from 'react'
import NewsArticle from "../components/NewsArticle"

const API_KEY = process.env.REACT_APP_NEWS_API_KEY
const NEWS_API = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&sources=bbc-news`

const News = () => {
  const [headlines, setHeadlines] = useState([])

  const getNews = async () => {
    try {
      const response = await (await fetch(NEWS_API)).json()

      console.log(response)
      
      if(response.status === "error") {
        setHeadlines([])
        return
      }

      setHeadlines(response.articles)

    } catch(e) {
      console.log('error occurred', e)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="row row-cols-2 row-cols-md-4 gy-5 gx-2">
      {
        headlines.map(headline => {
          return <NewsArticle key={headline.title} article={headline} />
        })
      }
    </div>
  )
}

export default News