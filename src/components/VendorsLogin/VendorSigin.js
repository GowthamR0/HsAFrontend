import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneno: "",
            image: "",
            address: "",
            city: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { name, email, phoneno, image, address, city, password } = this.state;
        //console.log(fname, lname, email, password);
        fetch("http://localhost:5000/home/work", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name,
                email,
                phoneno,
                image,
                address,
                city,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                window.location.href = "./card";
            });
    }
    render() {
        return (
            <div classname="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign Up</h3>

                        <div className="mb-3">
                            <label>Name</label>
                            <div className="in">
                                <input
                                    type="text"
                                    className="form-control"

                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </div>
                        </div>

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
                            <label>Phoneno</label>
                            <div className="in">
                                <input
                                    type="text"
                                    className="form-control"

                                    onChange={(e) => this.setState({ phoneno: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Image</label>
                            <div className="in">
                                <input
                                    type="text"
                                    className="form-control"

                                    onChange={(e) => this.setState({ image: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Address</label>
                            <div className="in">
                                <input
                                    type="text"
                                    className="form-control"

                                    onChange={(e) => this.setState({ address: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>City</label>
                            <div className="in">
                                <input
                                    type="text"
                                    className="form-control"

                                    onChange={(e) => this.setState({ city: e.target.value })}
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
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}