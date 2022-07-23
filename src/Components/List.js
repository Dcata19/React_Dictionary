import React from 'react'

export default function List({ words }) {

    const listItems = words.map((word, index) => 
        <li className='list-group-item text-center' key={index}>{word}</li>)

    return (
        <div>
            <ul className="w-25 list-group list-group-flush position-relative start-50 translate-middle-x">
                {listItems}
            </ul>
        </div>
  )
}
