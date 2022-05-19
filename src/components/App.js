import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [buttonDark, setButtonMode] = useState(true)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);    
  }

  function buttonMode () {
    setButtonMode((buttonDark) => !buttonDark)
    return isDarkMode ? "Dark Mode" : "Light Mode"
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header buttonClick={buttonMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
