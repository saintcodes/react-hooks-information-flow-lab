import React from 'react'

function Header({onDarkModeClick, buttonDark}) {

  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {buttonDark ? "Light Mode": "Dark Mode"}
        </button>
    </header>
  )
}

export default Header