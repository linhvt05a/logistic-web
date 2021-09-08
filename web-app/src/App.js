import React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Content from './content/content';
import Footer from './footer/footer';
import Nav from './navbar/nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Content />
        <Footer />
      </Router>
    </>
  )
}

export default App

