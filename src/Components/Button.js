import React from 'react'

function Button({buttonDisplayName, clickHandler}) {
  return (
    <button onClick={clickHandler}>{buttonDisplayName}</button>
  )
}

export default Button