import React from 'react'

export default function Add({ input, setWords, setMessage}) {

    function addWord() {
        setMessage('');
        setWords(current => [...current, input]);
    }

    return (
        <>
        <button className="btn btn-success" onClick={handleInputChange}>Add</button>
        </>
    )
}
