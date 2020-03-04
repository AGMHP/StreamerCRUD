import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const App = () =>{
    return(
        <div className="ui second pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className ="right menu">
                <Link to="/" className="item">
                    Log IN
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default App;