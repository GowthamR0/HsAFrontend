


import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography sx={{ fontFamily: "fantasy", color: "yellow" }}  >
                    Home
                </Typography>
                <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
                    By MERN STACK
                </Typography>
            </Box>

        </div>
    );
};

export default Home;
