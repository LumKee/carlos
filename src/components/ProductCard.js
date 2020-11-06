import React from 'react';

import {
    Grid,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        overflow: 'hidden',
        padding: ` ${theme.spacing(1)}px ${theme.spacing(1)}px`,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    card: {
        width: 280,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '14px'
        },
        boxShadow: '0px 1px 4px rgba(51, 51, 51, 0.1)',
        borderRadius: 10,
    },
    media: {
        width: '100%',
        height: 190,
        objectFit: 'cover'
    },
}));

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/img/promotions-bg.jpg"
                        title="carrelage produit"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Carrelage
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="h3">
                            Petite sirène
                        </Typography>
                        <Typography variant="h6" component="span">
                            18.50 €
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ProductCard;