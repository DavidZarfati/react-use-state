import { useState } from 'react'
import './App.css'
import languages from "../languages"

function App() {

  const [openId, setOpenId] = useState();
  return (
    <>
      <header className='titolo'><h1>Learn web development</h1></header>
      <div>
        {languages.map((language) => (
          <button
            className={openId && openId.id === language.id ? "btn selezionato" : "btn"}
            key={language.id}
            onClick={() => setOpenId(language)}
          >
            {language.title}
          </button>
        ))}

        <div className="card">
          <h3>{openId ? openId.title : "Nessun linguaggio Selezionato"}</h3>
          <p>{openId ? openId.description : "Nessun linguaggio Selezionato"}</p>
        </div>

      </div>
    </>
  )
}

export default App
