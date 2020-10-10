import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Lists from './Lists';
import FunctionalTest from './FunctionalTest';
import { BrowserRouter,Link,Switch,Route } from 'react-router-dom';

class App extends React.Component{
  render(){
     return (<BrowserRouter>
    <div>
      <Link to="/">Login</Link>
      <br/>
      <Link to="/functional-test">FunctionalTest</Link>
      <br/>
      <Link to="/lists">Lists</Link>
    <Switch>
      <Route exact path="/">
        <Login title="Login page from prop"/>
      </Route>
      <Route path="/functional-test">
       <FunctionalTest title="FunctionalTest title"/>
      </Route>
      <Route path="/lists">
        <Lists/>
      </Route>
    </Switch>
    </div>;
    </BrowserRouter>);
  }
}

export default App;
