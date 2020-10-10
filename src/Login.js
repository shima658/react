
     //REACT LIFE-CYCLE

import React from 'react';
import axios from 'axios';
import './Login.css'

class Login extends React.Component{
    state = {
         title:"Login Page",
         acno:"",
         password:"",
         showLogin:false
    }
    acnoChange = (event)=>{
      this.setState({
        acno:event.target.value
      });
    }
    passwordChange = (event)=>{
      this.setState({
        password:event.target.value
      });
    }
    inputChange = (event)=>{
      this.setState({
        [event.target.name]:event.target.value
      });
    }
    handleSubmit=(event)=>{
      //alert("Submit clicked");
      //alert(this.state.username+this.state.password);
      if(process.env.NODE_ENV=="development"){
        alert("Form Submission")
      }
      event.preventDefault();
      axios.post(process.env.REACT_APP_APP_URL+'/login' ,{
        acno: this.state.acno,
        password: this.state.password
      }, {
        withCredentials: true
      })  
        .then(response=>{
        alert(response.data.message)
      }).catch(error=>{
        alert(error.response.data.message)
      });
    }
    constructor(props){
       super(props);
    }
    // static getDerivedStateFromProps(props,state){

    // }
    // shouldComponentUpdate(){

    // }
    render(){
      //React.createElement('p',{},'This is a text');
      //<p>This is a text</p>
      if(this.state.showLogin==false){
        return(<div style={{color:"yellow"}} className="loginContainer">
          <p>Login is disabled</p>
          <button onClick={()=>{
           this.setState({
            showLogin:true
           })
          }}>Enable login</button>
        </div>);
      }else{
        return <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label>AccountNumber</label>
          <input className="form-control" type="text" value={this.state.acno}  onChange={this.acnoChange} name="acno"/> 
        </div>

       <div className="form-group">
          <label>Password</label>
          <input className="form-control" type="text" value={this.state.password}  onChange={this.passwordChange} name="password"/> 
       </div>

        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </div>;
  }
      }
     
    // getSnapshotBeforeUpdate(prevProps,prevState){

    // }
    // componentDidUpdate(){

    // }
    // componentDidMount(){

    // }
    // componentWillUnmount(){
    //   //This method is called when the component is about to be removed from dom
    // }
  }
  
  export default Login;
  