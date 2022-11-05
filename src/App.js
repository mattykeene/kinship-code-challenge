import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignIn/> } />
          <Route path="/dashboard" element={ <Dashboard/> } />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
