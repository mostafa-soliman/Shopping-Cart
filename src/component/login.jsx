import React, { Component } from 'react';
class Login extends Component {
    state ={
        username : "" ,
        password : "" ,
        errors :{}
    };
    handleSubmit = e =>{
        e.preventDefault();

        const errors =this.validate();
        
        if(errors) return;
        console.log("submit");
    
    };

    validate =() => {
        const errors = {};
        if(this.state.username.trim()==="")
            errors.username = "Username is Requerd";
            
        if(this.state.password.trim()==="")
            errors.password = "Password is Requerd";
        
            this.setState({errors});
            return Object.keys(errors).length ===0 ? null: errors;
    };

    handleChange =e =>{
       //coln
       let state ={...this.state};
       //Edit
       state =e.currentTarget.value;
       //Set state
       this.setState({state});
    };  
    render() { 
        return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" >Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleChange} autoFocus id='username' type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} id='password' type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>);
    }
}
 
export default Login;