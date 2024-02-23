


import { Box, Typography } from "@mui/material";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import "./Log.css";



const Log = () => {
    return (
        <div className="flex-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://www.designfreelogoonline.com/wp-content/uploads/2020/07/00695-cleaning-01.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home Cleaning
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signupHc">LOGIN</Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://cdn.logojoy.com/wp-content/uploads/20220228134805/optimal-electrical-logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Electricians
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signup" >LOGIN</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://img.freepik.com/premium-vector/painting-logo-design-with-home-concept-rainbow-color_231513-144.jpg?w=2000"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home Painting
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signupHp">LOGIN</Button>

                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://i0.wp.com/www.carterservicestn.com/wp-content/uploads/2019/07/plumbing-Plumber-Logo-Png-clipart-collection-home-oa-and-bathrooms-services-home-Plumber-Logo-Png-oa-plumbing-and-bathrooms-services-north.jpg?ssl=1"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Plumbers & Carpenters
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signupP">LOGIN</Button>

                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4EjYUmks9KGddD6dSSmY2ySgZlB45dh94w&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Appliances Repair
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signupA">LOGIN</Button>

                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={5} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 175 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCe2OFl_EZ8_P-h1qHmLyhXPg0GFBieC-F4E2uElac6KbxlqJsmXxYd3K7-Rxphe9bQbg&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pest Control
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/signupPest">LOGIN</Button>

                        </CardActions>
                    </Card>


                </Grid>

            </Grid>

        </div>



    );
};

export default Log;





