import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GameScreen from './pages/GameScreen'
import Signin from './pages/Signin'
import { isAuthenticated } from './utils/auth'
import Header from './components/Header'
import PlayGame from './pages/PlayGame'


function App() {
  const [user, setUser] = useState(null)
  // const [username, setUsername] = useState('');
  // const [passwrod, setPassword] = useState('');

  useEffect(() => {
    const user_data = isAuthenticated()
    console.log(user_data)
    if (user_data) setUser(user_data)
  }, [])

  // const addUsername= ()=>{
  //   const  = Signin.getElementById('username-signin');


  // }

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Signin setUser={setUser} />} />
        <Route path="/playgame" element={<PlayGame user={user} setUser={setUser} />} />
        <Route path="/gamescreen" element={<GameScreen user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
