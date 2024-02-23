


import { Box, Typography } from "@mui/material";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import "./Card.css";



const SCard = () => {
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
                            <Typography variant="body2" color="text.secondary">
                                Best Cleaning Services is a professional cleaning agency providing high-quality domestic cleaning and office cleaning services in Coimbatore. We specialise in providing domestic cleaners to private residences and cleaning services to local businesses.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Hccard">Services</Button>
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
                            <Typography variant="body2" color="text.secondary">
                                We provide you with all kinds of electrical repairs such as fixing the wiring system or fans, switches, fuses, fancy light or meters.
                                We also offer experienced electrical contractors who will focus on your needs and specifications within your specified electric wiring, switches, fuses etc.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Ecard" >Services</Button>
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
                            <Typography variant="body2" color="text.secondary">
                                We are well known service providers for house interior painting service, house exterior painting service, exterior painting services, interior painting services, interior painting services ,
                                Residential Painting Service ,various painting service and also best in Quality.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Hpcard">Services</Button>

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
                            <Typography variant="body2" color="text.secondary">
                                In Plumbing services can also include faucet services, sewer line services, water heater services, sump pump services, piping/leak services, toilet plumbing, etc.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Pcard">Services</Button>

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
                            <Typography variant="body2" color="text.secondary">
                                We try to first repair the appliance at home itself. In case, it requires or any extra fixtures, then we may take your appliance to a workshop and deliver it once the appliance is fixed.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Acard">Services</Button>

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
                            <Typography variant="body2" color="text.secondary">
                                Pest Control services are provided in home, offices, schools and factories to destroy cockroach,lizards, bed bugs, termites and rodents are covered under pest control services.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to="/Pestcard">Services</Button>

                        </CardActions>
                    </Card>


                </Grid>

            </Grid>

        </div>



    );
};

export default SCard;





