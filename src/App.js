import React from 'react';
import { BrowserRouter as Router, Switch,Route, Link, useHistory, Redirect, useLocation } from 'react-router-dom'
import photo from "./components/pp.jpeg"
import './App.css';
import Protected from './components/protected';
import Pagniation from './components/pagniation';



function App() {
 
  return (
    <div className="App">
      <div className="jumbotron bg-dark text-light p-2 mb-0">
      <h1>Hello Azamat</h1>
        <h4>This is new instakg</h4>
      </div>
   
      <Router>
        <div>
     
<nav className="navbar navbar-expand-sm p-1  bg-info navbar-dark">
 <ul className="navbar-nav">
   <li className="nav-item active">
     <Link to="/" className="nav-link">Home</Link>
   </li>
   <li className="nav-item">
     <Link to="/pagein" className="nav-link">Pagination</Link>
   </li>
   <li className="nav-item">
     <Link to="/protected" className="nav-link">Protected</Link>
   </li>
  
 </ul>
 
 </nav>

 <Switch>
   <Route exact path="/"><Home/></Route>
   <Route exact path="/pagein"><Pagniation/></Route>
   <Route path="/login"><LoginPage/></Route>
   
   <PrivateRoute path="/protected"> <Protected/></PrivateRoute>
 </Switch>
 </div>
 </Router>
    </div>
  );
}
const fakeAuth ={
isAuth: false,
SignIn(ab){
  fakeAuth.isAuth = true;
  setTimeout(ab, 100)
},
signOut(ab){
  fakeAuth.isAuth = false;
  setTimeout(ab, 100)
    }
  }


  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  function Home(){
    return (
      <div className="container">
      <h1>Home page here</h1>
      <div className="row">
        <div className="col-lg-3">
      <div className="card ml-5" style={{width: 300}}>
      <img src={photo} className="card-img-top" alt="profilephoto"/>
        <div className="card-body">
          
          <h3 className="card-title">Azamat Arapov</h3>
          <p className="card-text">Software Engineer. <br/> 
          Class of 2020 NAU.</p>
          <button className ="btn btn-primary" data-toggle="collapse" data-target="#demo">See Profile</button>
        </div>
       </div>
      </div>
      <div id="demo" className="col-lg-8 ml-auto card text-center collapse">
       one  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
        </div>

        <div  className="col-lg-8 ml-auto card text-center">
        two Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod t empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
        </div>
      </div>
</div>
    )
  }
function LoginPage(){
  let history =useHistory();
  let location = useLocation();
  let {from} = location.state || {from: {pathname: "/"}};
  let login =()=>{
    fakeAuth.SignIn(()=>{
      history.replace(from);
    })
  }
  return(
    <div>

<p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default App;
