import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../Components/NavBar/NavBar';
import Notes from '../../Pages/Notes/Notes'
import Home from '../../Pages/Home/Home'


export default function App() {
  const [user, setUser] = useState(getUser());
  console.log('hello')
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
