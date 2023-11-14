import React from 'react'
import AnimatedCursor from "react-animated-cursor"


const CursorPoint = () => {
  return (
    <div>
        <AnimatedCursor 
        color='246, 218, 59'
        innerSize={12}
        outerSize={12}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
    </div>
  )
}

export default CursorPoint