import React, { useEffect, useState } from "react";

import axios from "axios";




import { Link } from "react-router-dom";

import { Typography } from "@mui/material";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import "./Evendor1.css";
const URL = "http://localhost:5000/home/vendorA";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.work));
    }, []);
    console.log(books);
    return (

        <div className="grid-container">

            {books && books.map((book) => (
                <div className="grid-item">
                    <Card sx={{ maxWidth: 325 }}>
                        <CardMedia
                            component="img"

                            height="175"
                            image={book.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {book.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {book.email}

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" LinkComponent={Link}
                                to={`/ordersA/${book._id}`}>Book</Button>

                        </CardActions>
                    </Card>
                </div>

            ))}
        </div>

    );

};

export default Books;





/*return (
        <div>

            {books &&
                books.map((book) => (

                    <Book book={book} />

                ))}

        </div>
    );*/
