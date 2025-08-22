import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

// Context
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;