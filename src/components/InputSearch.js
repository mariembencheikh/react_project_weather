import React from 'react'

const InputSearch = ({enterKeyPressed, handleUnitsClick}) => {
  return (
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          
</div>
  )
}

export default InputSearch