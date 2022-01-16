import React from 'react'

/*
This import statement will be placed inside of containers
----------------------------------------------------------
import { Article, Brand, CTA, Feature, Navbar } from './components';
to structure better our application

*/

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
           <div className="gradient__bg">
               <Navbar />
               <Header />
           </div>

           <Brand />
           <WhatGPT3 />
           <Features />
           <Possibility />
           <CTA />
           <Blog />
           <Footer />

        </div>
    );
}

export default App;
