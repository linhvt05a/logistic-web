import React from 'react'
import { Switch, Route,NavLink } from 'react-router-dom'
import { MENU } from '../constants'
import styles from "../appStyle/nav.module.css"
import Home from '../pages/Main/Home'
import Products from '../pages/Main/Products'
import Question from '../pages/Main/Question'
import News from '../pages/Main/News'
import Register from '../pages/Auth/Register'
import Login from '../pages/Auth/Login'

function LeftItemMenu() {
    return (
        <nav>
            <ul>
                {MENU && MENU.map((item,index)=> 
                <li key={index}> 
                    <NavLink exact activeClassName={styles.active} className={styles.navLink} to={item.path}>{item.page}</NavLink>
                </li>)}
            </ul>
        </nav>
    )
}

function RightItemMenu(){
    return(
        <div className={styles.rightItem}>
            <NavLink exact activeClassName={styles.active} to="/login" >Login</NavLink>
            <div className={styles.line} />
            <NavLink exact activeClassName={styles.active} to ="/register" >Signup</NavLink>
        </div>
    )
}
function Nav(props) {
    // console.log(props)
    return (
        <div>
           <div className={styles.menu}>
                <LeftItemMenu />
                <RightItemMenu />
           </div>
            <Switch>
                <Route path="/register"><Register /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/news"><News /></Route>
                <Route path="/qs"><Question /></Route> 
                <Route path="/sp"><Products /></Route>
                <Route exact path="/"> <Home /></Route>
            </Switch>
        </div>
    )
}


export default Nav
