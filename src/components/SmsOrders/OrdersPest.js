import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const Sms = () => {

    const [inputsp, setInputsp] = useState();
    const id = useParams().id;

    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/home/ordersPest/${id}`)
                .then((res) => res.data)
                .then((data) => setInputsp(data.work));
        };
        fetchHandler();
    }, [id]);


    // const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        phoneno: "",
        date: "",
        time: "",
        body: "",

    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };

    const sendRequest = async () => {

        await axios
            .post("http://localhost:5000/api/messages", {

                to: String("+91" + inputsp.phoneno),
                body: String(inputs.body),

            })
            .then((res) => res.data);
    };
    const sendDB = async () => {

        await axios
            .post("http://localhost:5000/home/confirm", {

                name: String(inputs.name),
                email: String(inputsp.email),
                phoneno: String(inputs.phoneno),
                date: String(inputs.date),
                time: String(inputs.time),
                address: String(inputs.body),

            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        console.log(inputsp.phoneno);
        sendDB().then(() => console.log("inserted"));
        sendRequest().then(() => history("/card"));
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={"center"}
                    maxWidth={700}
                    alignContent={"center"}
                    alignSelf="center"
                    marginLeft={"auto"}
                    marginRight="auto"
                    marginTop={10}
                >
                    <FormLabel>Name</FormLabel>
                    <TextField
                        value={inputs.name}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="name"
                    />
                    <FormLabel>Phone No </FormLabel>
                    <TextField
                        value={inputs.phoneno}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="phoneno"
                    />
                    <FormLabel>Date</FormLabel>
                    <TextField
                        value={inputs.date}
                        onChange={handleChange}
                        type="date"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="date"
                    />
                    <FormLabel>Time</FormLabel>
                    <TextField
                        value={inputs.time}
                        onChange={handleChange}
                        type="time"
                        min="09:00"
                        max="18:00"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="time"
                    />
                    <FormLabel>YOUR ADDRESS</FormLabel>
                    <TextField
                        value={inputs.body}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="body"
                    />


                    <Button variant="contained" type="submit">
                        Confirm Booking
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Sms;
