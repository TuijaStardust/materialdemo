import React from 'react';
import {Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    
})

const postitems = [
    {
        title: "My phone table",
        image: "https://www.pajutuija.fi/wp-content/uploads/2018/03/puhelinpoyta2-1024x628.jpg",
        text: "Phone table - restored by Tuija",
        link: "https://www.pajutuija.fi",
        id: 1
    },
    {
        title: "My cajon",
        image: "https://www.pajutuija.fi/wp-content/uploads/2018/04/cajon-vaaka-1024x683.jpg",
        text: "My Cajon - Made by Tuija",
        link: "https://www.pajutuija.fi",
        id: 2
    },
    {
        title: "My Bench",
        image: "https://www.pajutuija.fi/wp-content/uploads/2018/08/penkki-1-1024x564.jpg",
        text: "My Bench - Made by Tuija",
        link: "https://www.pajutuija.fi",
        id: 2
    },
    {
        title: "My cajon",
        image: "https://www.pajutuija.fi/wp-content/uploads/2018/04/cajon-vaaka-1024x683.jpg",
        text: "My Cajon - Made by Tuija",
        link: "https://www.pajutuija.fi",
        id: 2
    }
]

const Posts = () => {
    // const classes = useStyles();
    return (
        <div style={{marginTop:150, padding:20}}>
            <Grid container justify="space-evenly" alignItems="flex-start" spacing={3}>
                {postitems.map(postitem => (
                <Grid item xs={3}> 
                    <Card key={postitem.id}>
                        <CardMedia
                        component="img"
                        alt={postitem.title}
                        height="150"
                        image={postitem.image}
                        />

                        <CardContent>
                            <Typography>{postitem.title}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" color="primary" href={postitem.link}>
                                Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}


export default Posts;