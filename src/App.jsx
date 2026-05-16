import { useState } from "react";

function App() {

  const initialArticles = [
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
    }
  ]


  function handleSubmit (e){
    e.preventDefault()
    console.log('Form inviato');

    const newArticle ={
      id: articles.length + 1,
      title: newArticles,
    };

    setArticles([...articles, newArticle])
    
    setNewArticles('')
  }


  const [articles, setArticles] = useState(initialArticles)
  const [newArticles, setNewArticles] = useState('')


  return (
    <>


      <h1 className="pageTitle">Articles List</h1>


      <div className="content">


        <form onSubmit={handleSubmit}>
          <input name="query"  placeholder="Inserisci titolo" value={newArticles} onChange={e => setNewArticles(e.target.value)} />

          {/* <input name="query" placeholder="Inserisci titolo" onChange={setNewArticles} /> */}
          <button type="submit">Inserisci</button>
        </form>


        <div className="articles">
        {
          articles.map((article,i) => (
            <div className="article" key={article.id}>
              <h1>{article.title}</h1>
            </div>

          ))
        }
        </div>

      </div>











    </>
  )
}

export default App
