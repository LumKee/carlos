import React from 'react';

import {
    Grid,
    makeStyles
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography'
import Section from '../ui/src/layout/Section'

const useStyles = makeStyles(theme => ({
    container: {
        height: 'auto',
        margin: 0,
        width: '100%'
    },
    square: {
        position: 'relative',
        height: 410,
        width: '100%',
        '&:hover': {
            filter: 'brightness(80%)',
            cursor: 'pointer',
            transition: '400ms ease-out',
        }
    },
    interior: {
        background: 'url(/img/interior.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    recInterior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '75%',
        height: '45%',
        background: theme.palette.warning.main
    },
    interiorText: {
        position: 'relative',
        top: 195,
        left: 95,
        color: theme.palette.common.white,
    },
    exterior: {
        background: 'url(/img/exterior.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    recExterior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '45%',
        height: '100%',
        background: theme.palette.primary.main
    },
    exteriorText: {
        position: 'relative',
        top: 65,
        left: 35,
        color: theme.palette.common.white,
    },
}));

const CategoriesCards = () => {
    const classes = useStyles();

    return (
        <Section>
            <Grid
                className={classes.container}
                container
                alignItems="center"
                justify="space-between"
                spacing={3}
            >
                <Grid
                    className={`${classes.square} ${classes.interior}`}
                    container
                    item
                    xs={12}
                    md={6}
                >
                    <div className={classes.recInterior}></div>

                    <Typography className={classes.interiorText} variant="h4">
                        Inspiration <br></br>pour votre intérieur
                    </Typography>
                </Grid>

                <Grid
                    className={`${classes.square} ${classes.exterior}`}
                    container
                    item
                    xs={12}
                    md={6}
                >
                    <div className={classes.recExterior}></div>

                    <Typography className={classes.exteriorText} variant="h4">
                        Quel sol<br></br>pour votre extérieur ?
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    );
};

export default CategoriesCards;