
import React, { Component } from "react";




export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        //console.log(fname, lname, email, password);
        fetch("http://localhost:5000/home/aaemail", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("login successful");
                    //window.localStorage.setItem("token", data.data);
                    window.location.href = "http://localhost:3000/aaemail";
                }
            });
    }
    render() {
        return (
            <div classname="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3   >Login</h3>


                        <div>
                            <div className="mb-3">
                                <label>Email</label>
                                <div className="in">
                                    <input
                                        type="text"
                                        className="form-control"

                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="mb-3">
                                <label>Password</label>
                                <div className="in">
                                    <input
                                        type="password"
                                        className="form-control"

                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="bt">
                                    Login
                                </button>
                            </div>
                            <p className="forgot-password text-right">
                                Dont't have a account <a href="/about">sign in?</a>
                            </p>

                        </div>
                    </form>
                </div>
            </div >
        );
    }
}