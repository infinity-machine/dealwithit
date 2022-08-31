import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PlayGame from './pages/PlayGame'
import GameScreen from './pages/GameScreen'

function App() {
  // SHUFFLE NEW DECK OR DECKS
  // WE WILL HAVE TO GET DECK ID FROM THIS FETCH 
  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => console.log(data))

  // DRAW FROM NEW DECK
  // PLUG IN DECK ID FROM FIRST FETCH
  // YOU CAN ALSO DRAW FROM 'new' DECK
  // YOU CAN SPECIFY HOW MANY CARDS WITH THE COUNT=X QUERY
  // fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/playgame" element={<PlayGame />} />
        <Route path="/GameScreen" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;
