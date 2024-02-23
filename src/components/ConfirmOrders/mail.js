


// import { Box, Typography } from "@mui/material";
// import React from "react";

// import { useState } from 'react';

import Component2 from './ConfirmOrders';

// const About = () => {
//     const [state, setstate] = useState({ data: "" })

//     const changeState = () => {
//         setstate({ data: `Pest@gmail.com` });
//     };


//     return (
//         <div>
//             <Box display="flex" flexDirection="column" alignItems="center">

//                 <Component2 data={state.data} />

//             </Box>
//         </div>
//     );
// };

// export default About;

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

const Mail = () => {


    const history = useNavigate();


    const [inputs, setInputs] = useState({
        email: "",


    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(inputs);



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
                    <h1>BOOKING DETAILS</h1>
                    <FormLabel>ENTER YOUR EMAIL</FormLabel>
                    <TextField
                        value={inputs.email}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="email"
                    />




                    <div className='bbb'>
                        <Component2 data1={inputs.email} />
                    </div >

                </Box>
            </form>
        </div>
    );
};

export default Mail;

