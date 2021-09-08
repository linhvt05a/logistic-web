import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { MENU } from '../constants'
import "../appStyle/nav.module.css"
import Home from '../pages/Main/Home'
import Products from '../pages/Main/Products'
import Question from '../pages/Main/Question'
import News from '../pages/Main/News'

function ItemMenu() {
    return (
        <nav>
            <ul>
                {MENU && MENU.map((item,index)=> <li key={index}> <Link to={item.path}>{item.page}</Link></li>)}
            </ul>
        </nav>
    )
}
function Nav() {
    return (
        <div>
            <ItemMenu />
            <Switch>
                <Route path="/sp"><News /></Route>
                <Route path="/qs"><Question /></Route>
                <Route path="/news"><Products /></Route>
                <Route path="/"> <Home /></Route>
            </Switch>
        </div>
    )
}


export default Nav
