import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
const routes=[
   
    {
        path: "/",
        exact: true,
        sidebars: ()=> <div>Home</div>,
        main: ()=> <h1>Main home</h1>
    },
    {
        path: "/bubble",
        sidebars: ()=><div>Bublle sidebar menu</div>,
        main: ()=><h1> Main bubble list</h1>
    },{
        path: "/devices",
        sidebars: ()=> <div>Devices platforms</div>,
        main: ()=> <h1>Platforms menu</h1>
    }
];
export default function Sidebar() {
  
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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bubble">Bubble</Link>
                </li>
                <li>
                    <Link to="/devices">Platforms</Link>
                </li>
                </ul>
            <Switch>
               
                {routes.map((route, index)=>(
                     <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children= {<route.sidebars/>}
                    />
                ))}
            </Switch>
            
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
             
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
        </div>
        </Router>
    )
}
