import React, { useState } from 'react';
import Page from './Page';
import ThemeContext from './ThemeContext';

function App() {

  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    setTheme( (theme) => theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
