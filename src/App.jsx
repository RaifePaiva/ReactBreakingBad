import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './card/Card'
import Sobre from './sobre/Sobre';

function App() {

  const [payload, setPayload] = useState([])

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    axios.get('https://api.breakingbadquotes.xyz/v1/quotes/5')
      .then(response =>{
        console.log(response)
        setPayload(response.data)
      })
  }, [])


  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand text-white bg-dark">BreakingBadQuotes</span>
          <ul className="nav justify-content-rigth">
            <li className="nav-item">
              <a className="nav-link active text-white bg-dark" onClick={handleRefresh}>Atualizar</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='container container-content'>
        <h3>quotes:</h3>
        {
          payload.map((resp, index) => <Card key={index} author={resp.author} quote={resp.quote}/>)
        }
      </div>
    </>
  )
}

export default App
