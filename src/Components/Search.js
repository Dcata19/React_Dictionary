import React, { useCallback } from 'react'

export default function Search({ words, setMessage, input }) {

    function searchWord() {
        setMessage('');
        words.some(element => {
            if (element === input) {
                return setMessage(`"${input}" already exist in dictionary!`);
            } else {
                return setMessage(`"${input}" doesn't exist in dictionary!`);
            }
        })
    }

    return (
        <button className="btn btn-warning" onClick={searchWord}>Search</button>
    )
}
