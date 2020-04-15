import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import './custom.css'

function App() {
    return (
        <div className="content">
            <Button variant="contained" color="primary">
                Hello World
            </Button>

            <form className="my-class" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
            </form>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
