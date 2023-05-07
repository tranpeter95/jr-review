import React, { useContext } from 'react';
import { BackgroundColorContext } from '../App';

const ColorToggle = () => {
  // Access the setBackgroundColor function from the BackgroundColorContext.
  // useContext allows you to access context values from a functional component.
  const { setBackgroundColor } = useContext(BackgroundColorContext);

  // /** Random background color.
  const handleClick = () => {
    // Update the background color state using the setBackgroundColor function from the context.
    // Pass a function that sets the background color to a random color.
    setBackgroundColor(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`; // https://css-tricks.com/snippets/javascript/random-hex-color/
    });
  };
  // */

  return <button onClick={handleClick}>Change Background Color</button>;
};

export default ColorToggle;
