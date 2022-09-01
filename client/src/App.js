import { Routes, Route } from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import GameScreen from './pages/GameScreen'
import Signin from './pages/Signin'


function App() {
  // const [username, setUsername] = useState('');
  // const [passwrod, setPassword] = useState('');


// const addUsername= ()=>{
//   const  = Signin.getElementById('username-signin');


// }

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
