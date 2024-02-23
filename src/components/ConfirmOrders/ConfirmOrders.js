import React, { useEffect, useState } from "react";

import axios from "axios";







import { Link } from "react-router-dom";

import { Typography, Box } from "@mui/material";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import Book from "./cc";

const URL = "http://localhost:5000/home/confirmAllOreders";
// const fetchHandler = async () => {
//     return await axios.get(URL).then((res) => res.data);
// };
const Books = (props) => {
    const [books, setBooks] = useState();
    // useEffect(async () => {
    //     fetchHandler().then((data) => setBooks(data.work));
    // }, []);


    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/home/confirmAllOreders`)
                .then((res) => res.data)
                .then((data) => setBooks(data.work));
        };
        fetchHandler();
    });

    console.log(books);




    return (



        <div className="hhhr">


            {books && books.map((book) =>

            (book.email == props.data1 ? (

                <Book book={book} />) : (
                <></>
            )

            ))}
        </div>

    );//: (
    //{book}
    //     <div>
    //         <Box display="flex" flexDirection="column" alignItems="center">
    //             <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
    //                 About us
    //             </Typography>
    //             <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
    //                 By MERN STACK
    //             </Typography>
    //         </Box>
    //     </div>
    // );

};

export default Books;


{/* <div className="card">

                    
<article>By {book.name}</article>
<h3>{book.email}</h3>
<p>{book.phoneno}</p>
<h3>Rs {book.date}</h3>
<h3>Rs {book.time}</h3>
<h3>Rs {book.address}</h3>
<Button sx={{ mt: "auto" }}>
    Update
</Button>
<Button color="error" sx={{ mt: "auto" }}>
    Delete
</Button>
</div> */}





/*return (
        <div>

            {books &&
                books.map((book) => (

                    <Book book={book} />

                ))}

        </div>
    );*/
