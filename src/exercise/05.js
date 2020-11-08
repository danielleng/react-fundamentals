// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink'}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{backgroundColor: 'orange'}}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// Daniel Leng - Extra Credit 01: Custom Component
function Box({className = '', style, ...otherProps}) {
  return <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}></div>
}

// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>
//     </div>
//   )
// }

// Daniel Leng - Extra Credit 02: Accept a size prop to encapsulate styling
function SizedBox({size, className = '', style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : '';
  return(
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
    </div>
  );
}

function App() {
  return (
    <div>
      <SizedBox size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</SizedBox>
      <SizedBox size="medium" style={{backgroundColor: 'pink'}}>medium pink box</SizedBox>
      <SizedBox size="large" style={{backgroundColor: 'orange'}}>large orange box</SizedBox>
    </div>
  )
}

export default App
