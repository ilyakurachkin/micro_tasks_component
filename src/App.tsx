import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";


function App() {
    return (
        <>
            <Header title={'Hello'}/>
            <Body title={'Hello2'}/>
            <Footer title={'Hello3'}/>
        </>
    );
}

export default App;
