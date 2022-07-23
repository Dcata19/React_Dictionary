import React, { useRef } from 'react'
import Add from './Components/Add';
import List from './Components/List';
import Search from './Components/Search';

export default function App() {

    const [words, setWords] = React.useState([]);
    const [message, setMessage] = React.useState('');
    const [input,  setInput] = React.useState('a');

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    return (
        <>
        <div className="mt-3 w-25 input-group mb-3 position-relative start-50 translate-middle-x">
            <Add input={input} setWords={setWords} setMessage={setMessage}/>
            <Search words={words} setMessage={setMessage} input={input}/>
            <input type="text" className="form-control" placeholder="Type a word..." onChange={handleInputChange}></input>
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
