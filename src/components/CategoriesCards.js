import React from 'react';

import {
    Grid,
    Typography,
    useTheme,
    makeStyles
} from '@material-ui/core';

import Section from './Section'

const useStyles = makeStyles(theme => ({
    container: {
        height: 'auto',
        margin: 0,
        width: '100%'
    },
    square: {
        height: 410,
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    interior: {
        background: 'url(/img/interior.jpg)',
    },
    exterior: {
        background: 'url(/img/exterior.jpg)',
    }
}));

const CategoriesCards = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isXs = theme.breakpoints.down('xs');

    return (
        <Section>
            <Grid
                className={classes.container}
                container
                spacing={3}
                alignItems="center"
            >
                <Grid
                    className={`${classes.square} ${classes.interior}`}
                    item
                    xs={12}
                    md={6}
                >
                </Grid>

                <Grid
                    className={`${classes.square} ${classes.exterior}`}
                    item
                    xs={12}
                    md={6}
                >
                </Grid>
            </Grid>
        </Section>
    );
};

export default CategoriesCards;