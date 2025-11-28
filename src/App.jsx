import { useState } from 'react'
import './App.css'
import languages from "../languages"

function App() {
  const [openId, setOpenId] = useState(1);
  return (
    <>
      <header className='titolo'><h1>Learn web development</h1></header>
      <div>
        {languages.map((language) => (
          <button className='btn' key={language.id}>{language.title}</button>
        ))
        }

        <div className="card">
          <h3>nome linguaggio</h3>
          <p>spiegazione linguaggio</p>
        </div>

      </div>
    </>
  )
}

export default App
