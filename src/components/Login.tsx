import { Component, useState } from "react";
import { toast } from "react-toastify";
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

    onClick = () => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(process.env.REACT_APP_API_URL + ApiRoutes.Authorize, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then((data: LoginApiResponse) => {
            console.log("response");
            if (data.Authorized === true) {
                toast(data.Message,{type:"success"});
                history.push("/" + Routes.Menu);
            }
            else {
                toast(data.Message,{type:"error"});
            }
        }).catch(console.log);


    };

    render() {
        return (
            <div style={{ width: "30%", marginLeft: "35%", marginTop: "5%" }}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={this.state.username} onChange={e => this.setState({ username: e.target.value })}
                        type="text" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
                        type="password" className="form-control" placeholder="Password" />
                </div>
                <button
                    onClick={this.onClick}
                    style={{ width: "30%", marginLeft: "35%" }} type="submit" className="btn btn-primary">Login</button>
            </div>
        );
    }
};

export default Login;


