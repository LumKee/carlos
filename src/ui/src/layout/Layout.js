import React from 'react';

import {
    Container,
    Grid,
    CssBaseline,
    makeStyles
} from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
    container: {
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    minHeightFull: {
        minHeight: '100%'
    },
    pageContainer: {
        flexGrow: 1,
        display: 'flex',
        maxWidth: '100%'
    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <CssBaseline />

            <Grid className={classes.minHeightFull} container direction="column">
                <Grid item>
                    <Header />
                </Grid>

                <Grid className={classes.pageContainer} item>
                    {children}
                </Grid>

                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Layout;