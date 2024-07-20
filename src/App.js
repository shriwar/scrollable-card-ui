import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=200')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <h1>Random User Cards</h1>
      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-button">◀</button>
        <button onClick={scrollRight} className="scroll-button">▶</button>
      </div>
      <div className="card-container" ref={containerRef}>
        {users.map((user, index) => (
          <div key={user.login.uuid} className="card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{`${user.location.city}, ${user.location.country}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
