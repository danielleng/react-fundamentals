// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {

  // Daniel Leng - Extra Credit 03: Control the input value
  const [username, updateUsername] = useState('');

  const handleSubmit = function(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = function(event) {
    const updatedUsername = event.target.value;
    updateUsername(updatedUsername.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" value={username} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
