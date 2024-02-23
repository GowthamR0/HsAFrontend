import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";

import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "blue" }} position="sticky">
                <Toolbar>

                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="yellow"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        {/* <Tab LinkComponent={NavLink} to="/" label="start" /> */}
                        <Tab LinkComponent={NavLink} to="/card" label="home" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us " />
                        {/* <Tab LinkComponent={NavLink} to="/aaemail" label="Orders" /> */}
                        {/* <Tab LinkComponent={NavLink} to="/signup" label="Login" /> */}
                        <Tab LinkComponent={NavLink} to="/Log" label="Login" />
                        <Tab LinkComponent={NavLink} to="/Sig" label="SigNUP" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
