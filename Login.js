import React,{Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter E-mail" />
                </div>
                <div className="form-group">
                <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
            </form>
        )
    }
}
