import { useState } from 'react'
import './App.css'
import languages from "../languages"
import Card from './components/card';

function App() {

  const [openId, setOpenId] = useState();
  return (
    <>
      <header className='titolo'><h1>Learn Web development</h1></header>
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
        <Card openId={openId} />
      </div>
    </>
  )
}

export default App
