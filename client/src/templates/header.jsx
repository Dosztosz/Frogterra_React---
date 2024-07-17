import React from 'react';

const Header = ({ items, onSelect }) =>{

return(

        <div className="header">
            <nav>
                <ul>
                    {items.map((item, index) => (
                      <li key={index} onClick={() => onSelect(item)}>
                        {item}
                      </li>
                    ))}
                </ul>
            </nav>
        </div>


    )

}

export default Header


