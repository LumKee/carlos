import React from 'react';
import { Link } from 'react-router-dom';

import {
    Grid,
    Button,
    useTheme,
    makeStyles
} from '@material-ui/core';

import Section from '../ui/src/layout/Section';
import Typography from '../ui/src/typography/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        height: 400,
        [theme.breakpoints.down('sm')]: {
            height: 330
        },
        width: '100%',
        background: 'url(/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    contentContainer: {
        height: '100%',
        padding: theme.spacing(3),
    },
    title: {
        background: theme.palette.common.black,
        color: theme.palette.secondary.main,
        padding: '8px 48px 8px 48px',

    },
    titleContainer: {
        position: 'relative',
        left: '15%'
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
            backgroundColor: '#FFF492',
            color: theme.palette.primary.dark,
            transition: '400ms ease',
        }
    }
}));

const BannerSection = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isXs = theme.breakpoints.down('xs');

    return (
        <Section className={classes.container}>
            <Grid
                className={classes.contentContainer}
                container
                justify="center"
                alignItems={isXs ? 'center' : 'flex-start'}
                direction="column"
                spacing={8}
            >
                <Grid
                    className={classes.titleContainer}
                    container
                    justify="flex-start"
                    item
                >
                    <Grid item>
                        <Grid>
                            <Typography className={classes.title} variant="h4" component="h1" align={isXs ? 'center' : 'left'}>
                                "Promotions sur nos
                            </Typography>
                        </Grid>
                        <Grid className={classes.moveLeft}>
                            <Typography className={classes.title} variant="h4" component="h1" align={isXs ? 'center' : 'left'}>
                                carrelages petite sirène"
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Button
                        className={classes.button}
                        component={Link}
                        to="/promotions"
                        variant="contained"
                        align="center"
                        size="large"
                    >
                        En savoir plus
                    </Button>
                </Grid>
            </Grid>
        </Section>
    );
};

export default BannerSection;