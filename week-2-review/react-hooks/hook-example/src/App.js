import React, { useState, createContext } from 'react';
import Counter from './components/Counter';
import ColorToggle from './components/ColorToggle';
import AddName from './components/AddName';

// Create a context to share background color state across components
export const BackgroundColorContext = createContext();

const App = () => {
  // Declare the background color state using the useState hook. Initialize backgroundColor to 'lightblue'
  const [backgroundColor, setBackgroundColor] = useState('lightblue');

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      {/* Wrap components in the BackgroundColorContext.Provider, so they have access to setBackgroundColor */}
      <BackgroundColorContext.Provider value={{ setBackgroundColor }}>
        <Counter />
        <ColorToggle />
        <AddName />
      </BackgroundColorContext.Provider>
    </div>
  );
};

export default App;
