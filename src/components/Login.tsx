import { Component, useState } from "react";
import { toast } from "react-toastify";
import { ApiCommunicator } from "../api/ApiCommunicator";
import { ApiRoutes } from "../constants/ApiRoutes";
import { Routes } from "../constants/Routes";
import history from "../History";

interface LoginState {
    username: string;
    password: string;
}

interface LoginApiResponse {
    Message: string,
    Code: number,
    Authorized: boolean
}

class Login extends Component {

    state: LoginState = {
        username: "admin",
        password: "admin",
    }

    onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        ApiCommunicator.CallPost<LoginApiResponse>(ApiRoutes.Authorize,(data:LoginApiResponse)=>{
            if (data.Authorized === true) {
                toast(data.Message,{type:"success"});
                history.push("/" + Routes.Menu);
            }
            else {
                toast(data.Message,{type:"error"});
            }
        },null,this.state);

    };

    render() {
        return (
            <div style={{ width: "30%", marginLeft: "35%", marginTop: "5%" }}>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={this.state.username} onChange={e => this.setState({ username: e.target.value })}
                        type="text" className="form-control" placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
                        type="password" className="form-control" placeholder="Password" required />
                </div>
                <button
                    onClick={this.onClick}
                    style={{ width: "30%", marginLeft: "35%" }} type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }
};

export default Login;


