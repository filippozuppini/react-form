

function App() {

  const articles = [
    {
      id: 1,
      title: 'Article1'
    },
    {
      id: 2,
      title: 'Article2'
    },
    {
      id: 3,
      title: 'Article3'
    },
    {
      id: 4,
      title: 'Article4'
    },
  ]

  return (
    <>


      <h1 className="pageTitle">Articles List</h1>


      <div className="content">
      {
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h1>{article.title}</h1>
          </div>

        ))
      }
      </div>








    </>
  )
}

export default App
