import React from 'react';

import {
    Grid,
    makeStyles
} from '@material-ui/core';

import Section from '../ui/src/layout/Section';
import Typography from '../ui/src/typography/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        height: 250,
        width: '100%',
        background: 'url(/img/promotions-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    contentContainer: {
        height: '100%',
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    title: {
        background: '#4D4D4D',
        color: theme.palette.common.white,
        padding: '8px 48px 8px 48px',

    },
    titleContainer: {
        width: 'auto',
    },
    moveLeft: {
        position: 'relative',
        left: '15%'
    },
    button: {
        width: '100%',
        fontFamily: 'Poppins SemiBold, sans-serif',
        color: theme.palette.common.black,
        background: theme.palette.secondary.main,
        borderRadius: '4px',
        boxShadow: 'none',
        padding: '8px 48px',
        fontSize: '16px',
        letterSpacing: '0.5px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '14px'
        },
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.dark,
            transition: '400ms ease',
        }
    }
}));

const PromotionsSection = () => {
    const classes = useStyles();

    return (
        <Section className={classes.container}>
            <Grid
                className={classes.contentContainer}
                container
                alignItems="flex-start"
                direction="column"
            >
                <Grid
                    className={classes.titleContainer}
                    container
                    justify="flex-start"
                >
                    <Grid item>
                        <Grid>
                            <Typography className={classes.title} variant="h4">
                                "Profitez de nos meilleurs
                            </Typography>
                        </Grid>
                        <Grid className={classes.moveLeft}>
                            <Typography className={classes.title} variant="h4">
                                promotions"
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Section>
    );
};

export default PromotionsSection;