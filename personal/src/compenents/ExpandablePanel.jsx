import React from 'react'
import '../styles/ExpandablePanel.css'
import { FaCaretLeft, FaCaretDown  } from "react-icons/fa";
import { useState } from 'react';

const ExpandablePanel = ({header,children}) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }


  return (
    <div className='panelDiv'>        
           <div className='flex-container'>
            <div className='flex-container'>
            {header}
            </div>
            <div className='downLeft' onClick={handleClick}>
                {expanded ? <FaCaretDown/> : <FaCaretLeft/>}
            </div>
           </div>


        {expanded && <div>{children}</div>}
          
    </div>
  )
}

export default ExpandablePanel
