import React from 'react'
import List from './List';

export default function App() {

    const [words, setWords] = React.useState([]);
    const [message, setMessage] = React.useState('');
    const [input, setInput] = React.useState('');

    function handleChange(event) {
        setInput(event.target.value);
    }

    function searchWord() {
        setMessage('');
        words.some(element => {
            if (element === input) {
                return setMessage(`"${input}" already exist in dictionary`);
            } else {
                return setMessage(`"${input}" doesn't exist in dictionary`);
            }
        })
    }

    function addWord() {
        setInput('');
        setMessage('');
        setWords(current => [...current, input]);
    }

    return (
        <>
        <div className="mt-3 w-25 input-group mb-3 position-relative start-50 translate-middle-x">
            <button className="btn btn-success" onClick={addWord}>Add</button>
            <button className="btn btn-warning" onClick={searchWord}>Search</button>
            <input type="text" className="form-control" placeholder="Type a word..." onChange={handleChange} value={input}></input>
        </div>
        <div className='w-25 container'>
            <h5 className = 'text-center'>{message}</h5>
            <hr className="border-primary opacity-75"></hr>
        </div>
        <div className='w-25 text-success position-relative start-50 translate-middle-x'>
            <h5 className = 'text-center'>Dictionary</h5>
            <hr></hr>
        </div>
        <List words={words} />
        </>
    )
}
