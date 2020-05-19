import React from 'react'
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const routes =[
    {
        path: "/about",
    
        exact: true,
        children: ()=> <About/>
    },{
        path: "/contact",
        
        children:()=> <Contact/>
    },
    {
        path: "/servicess",
        
        children: ()=> <Servicess/>,
    }
      
  
]
export default function Pagniation() {
  
    return (
        <Router>
        <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/servicess">Service</Link>
                </li>
                </ul>
            <Switch>
               
                {routes.map((route, index)=>(
                     <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children= {<route.children/>}
                    />
                ))}
            </Switch>
            
        </div>
        </div>
        </Router>
    )
}

function About(){
    return(
        <h1>About page </h1>

    )
}
function Contact(){
    return(
        <h1> Contact page </h1>
    )
}
function Servicess({routes}){
    return(
        <div>
        <h1>Service page </h1>
       
     
        </div>
    )
}
