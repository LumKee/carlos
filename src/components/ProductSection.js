import React from 'react';
import { Link } from 'react-router-dom';

import {
    Grid,
    Button,
    makeStyles
} from '@material-ui/core';

import Typography from '../ui/src/typography/Typography';
import Section from '../ui/src/layout/Section';

import ProductCard from './ProductCard';

const useStyles = makeStyles(theme => ({
    button: {
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        fontFamily: 'Poppins SemiBold, sans-serif',
        color: theme.palette.common.black,
        background: theme.palette.secondary.main,
        borderRadius: '4px',
        boxShadow: 'none',
        fontSize: '16px',
        letterSpacing: '0.5px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '14px'
        },
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#FFF492',
            color: theme.palette.primary.dark,
            transition: '400ms ease',
        }
    }
}));

const ProductSection = () => {
    const classes = useStyles();

    return (

        <Section>
            <Grid
                container
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Typography variant="h5">
                        Nos dernières arrivées
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                    spacing={3}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Grid>

                <Grid
                    container
                    item
                    justify="center"
                >
                    <Button
                        className={classes.button}
                        component={Link}
                        to="/promotions"
                        variant="contained"
                        align="center"
                        size="large"
                    >
                        Voir toutes les nouveautés
                    </Button>
                </Grid>
            </Grid>
        </Section>
    );
};

export default ProductSection;