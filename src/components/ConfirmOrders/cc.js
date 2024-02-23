import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

import "./cc.css";

const Book = (props) => {
    const history = useNavigate();
    const { _id, name, email, phoneno, date, time, address } = props.book;
    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/home//confirmDelete/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/aaemail"));
        console.log("deleted");

        await axios
            .post("http://localhost:5000/api/messages", {

                to: String("+91" + phoneno),
                body: "Booking Cancelled Try other Vendors Thanks for Booking",

            })
            .then((res) => res.data);
        console.log(phoneno);
    };

    const dip = async () => {
        await axios
            .post("http://localhost:5000/api/messages", {

                to: String("+91" + phoneno),
                body: "Booking Confirmed Thanks for Booking",

            })
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/aaemail"));
        console.log(phoneno);
    };



    return (


        <div className="carddd">

            <div className="nameddd">
                <h3 id="name123">Client Name : {name}</h3>
            </div>
            <hr class="rounded"></hr>

            <h3 id="phno">Client phoneno : {phoneno}</h3>
            <h3 id="date"> Date For Service: {date}</h3>
            <h3 id="time"> Time For Service: {time}</h3>
            <h3 id="address"> Address: {address}</h3>
            <div className="bb2">
                <Button onClick={dip} sx={{ mt: "auto" }} >
                    Accept
                </Button>
                <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
                    Reject
                </Button>
            </div>
        </div>
    );
};

export default Book;
