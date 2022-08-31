import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PlayGame from './pages/PlayGame'
import GameScreen from './pages/GameScreen'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/playgame" element={<PlayGame />} />
        <Route path="/gamescreen" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;
