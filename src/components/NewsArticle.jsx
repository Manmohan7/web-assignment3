const NewsArticle = ({article}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={article.urlToImage} alt={article.title} />

        <div className="card-body">
          <p className="fs-3">{article.title}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsArticle