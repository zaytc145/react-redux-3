import React from 'react';

import TopList from './TopList';
import Header from './Header';
import MyList from './MyList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="ui container"> 
            <div className="ui segment">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={ TopList }></Route>
                        <Route path="/mylist" exact component={ MyList }></Route>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;

