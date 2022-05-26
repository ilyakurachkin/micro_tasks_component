import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

function App() {
    return (
        <div>
            <Header title={"new body"}/>
            <Body titleForBody={"new body"}/>
            <Footer titleForBody={'new body'}/>
        </div>
    );
}

export default App;
