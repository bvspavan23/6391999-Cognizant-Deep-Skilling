import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginLogoutButton from './components/Button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <LoginLogoutButton isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />
      <hr />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
