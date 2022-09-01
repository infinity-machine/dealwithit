import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import PlayGame from './pages/PlayGame'
import GameScreen from './pages/GameScreen'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/playgame" element={<PlayGame />} />
        <Route path="/gamescreen" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;
