import React from 'react';

import { BrowserRouter } from "react-router-dom"

import Profile from "./screens/ProfileScreen"
 
function App() { 
      
    return (
      <BrowserRouter className="app">
        <main>
            <Profile />
        </main>  
      </BrowserRouter>
    )
} 
 
 
export default App; 
