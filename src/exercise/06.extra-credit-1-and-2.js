// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {

  // Daniel Leng - Extra Credit 01: Using refs
  // A ref is an object that stays consistent between renders of your React component.
  // It has a current property on it which can be updated to any value at any time.
  // In the case of interacting with DOM nodes, you can pass a ref to a React element and React will set the current property to the DOM node that’s rendered.
  // useRef is a Hook (special type of function)
  const usernameRef = useRef();

  const handleSubmit = function(event) {
    event.preventDefault();
    // const username = event.target.elements.usernameInput.value;
    // console.dir(event.target); // output DOM properties instead of the DOM structure

    // Daniel Leng - Extra Credit 01: Using refs
    const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  // Daniel Leng - Extra Credit 02: Validate lower-case
  // useState is a hook (special type of function)
  const [errorMessage, updateErrorMessage] = useState('');
  const handleChange = function(event) {
    const username = event.target.value;
    const isValid = (username === username.toLowerCase());
    // if (!isValid) {
    //   updateErrorMessage('Username must be in lowercase');
    // } else {
    //   updateErrorMessage('');
    // }
    updateErrorMessage(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameRef} type="text" id="usernameInput" onChange={handleChange} />
      </div>
      <button disabled={Boolean(errorMessage)} type="submit">Submit</button>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
