import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Grid,
    makeStyles,
    useMediaQuery,
    useTheme
} from '@material-ui/core';

import Layout from '../ui/src/layout/Layout';
import Typography from '../ui/src/typography/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(4),
        }
    },
    image: {
        height: 300,
        [theme.breakpoints.down('xs')]: {
            height: 250
        },
        width: '100%',
        objectFit: 'cover'
    }
}));

const ProductPage = () => {

    const classes = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Layout>
                <Helmet>
                    <title>Carlos : votre spécialiste du carrelage petite sirène | A propos</title>
                    <meta
                        name="description"
                        content="Carlos : votre spécialiste du carrelage vous propose une large gamme de carrelage haut de gamme. Parfait pour submlimer vos intérieurs et extérieurs."
                    />
                    <meta
                        name="keywords"
                        content="carlos, carreau de carrelage petite sirène, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Carlos : à propos" />
                    <meta property="og:url" content="https://carlosmateriel.fr" />
                    <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
                </Helmet>

                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.title} variant="h5" components="h1">
                            A propos
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        className={classes.container}
                        item
                        spacing={8}
                        direction="column"
                    >
                        <Grid container item direction="row" spacing={isSm ? 2 : 6}>
                            <Grid item sm={12} md={6}>
                                <img
                                    className={classes.image}
                                    alt="carrelage petite sirène"
                                    src="/img/about-img.jpg"
                                />
                            </Grid>

                            <Grid item sm={12} md={6}>
                                <Typography variant="h6" gutterBottom components="h2">
                                    Carlos : votres spécialiste du carrelage petite sirène
                                </Typography>

                                <Typography variant="body1" gutterBottom components="p" align="justify">
                                    Carlos sublime vos intérieurs avec sa gamme de carrelage petite sirène de qualité. Optez pour des carreaux qui offriront un nouveau visage à votre sol.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item direction={isSm ? 'column-reverse' : 'row'} spacing={isSm ? 2 : 6}>
                            <Grid item sm={12} md={6}>
                                <Typography variant="h6" gutterBottom components="h2">
                                    Des carreaux de carrealage de qualité
                                </Typography>

                                <Typography variant="body1" gutterBottom components="p" align="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </Grid>

                            <Grid item sm={12} md={6}>
                                <img
                                    className={classes.image}
                                    alt="exemple de carrelage"
                                    src="/img/about-img2.jpg"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
};

export default ProductPage;