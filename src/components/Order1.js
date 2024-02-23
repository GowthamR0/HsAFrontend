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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sms = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        to: "",
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
                to: String(inputs.to),
                body: String(inputs.body),

            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => history("/Ecard"));
    };

    return (
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
                    value={inputs.to}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="to"
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
    );
};

export default Sms;

/* important main */
