import React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './navbar/nav';
import styles from './appStyle/app.module.css'
import Footer from './footer/footer';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Nav />
        <Footer />
      </Router>
    </div>
  )
}

export default App

