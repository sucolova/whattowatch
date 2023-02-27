import React from 'react';
import './App.css';
import {Form} from './features/form/Form.js';
import {Movies} from './features/Movies/Movies.js';

function App() {
    return (
        <div className="App">
            <h1 className='heading'>whatToWatch</h1>
            <Form />
            <Movies />
        </div>
    );
}

export default App;
