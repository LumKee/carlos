import React from 'react';
import { Link } from 'react-router-dom';

import {
    Grid,
    makeStyles
} from '@material-ui/core';

import Section from './Section';
import Typography from '../typography/Typography';

import { PRODUCTS_LINKS, SERVICES_LINKS, ORDER_LINKS, BRAND_LINKS } from './const';

const useStyles = makeStyles(theme => ({
    footerContainer: {
        background: 'none'
    },
    linksTitle: {
        fontFamily: 'Poppins Medium, sans-serif',
        letterSpacing: '1px',
        color: theme.palette.primary.main,
    },
    links: {
        textDecoration: 'none',
        color: theme.palette.common.black,
        fontFamily: 'Poppins Regular, sans-serif',
        letterSpacing: '1px',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
}));

// TODO: mutualize the common code with the mobile footer

const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
            <Section size="medium" className={classes.footerContainer}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography
                                    variant="bodySmall"
                                    className={classes.linksTitle}
                                >
                                    Nos parquets
                                </Typography>
                            </Grid>
                            {PRODUCTS_LINKS.map(({ label, to }) => (
                                <Grid item key={to}>
                                    <Typography
                                        component={Link}
                                        to={to}
                                        variant="bodySmall"
                                        className={classes.links}
                                    >
                                        {label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography
                                    variant="bodyBold"
                                    className={classes.linksTitle}
                                >
                                    Nos services
                                </Typography>
                            </Grid>
                            {SERVICES_LINKS.map(({ label, to }) => (
                                <Grid item key={to}>
                                    <Typography
                                        component={Link}
                                        to={to}
                                        variant="bodySmall"
                                        className={classes.links}
                                    >
                                        {label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography
                                    variant="bodyBold"
                                    className={classes.linksTitle}
                                >
                                    Vos commandes
                                </Typography>
                            </Grid>
                            {ORDER_LINKS.map(({ label, to }) => (
                                <Grid item key={to}>
                                    <Typography
                                        component={Link}
                                        to={to}
                                        variant="bodySmall"
                                        className={classes.links}
                                    >
                                        {label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography
                                    variant="bodyBold"
                                    className={classes.linksTitle}
                                >
                                    Carlos
                                </Typography>
                            </Grid>
                            {BRAND_LINKS.map(({ label, to }) => (
                                <Grid item key={to}>
                                    <Typography
                                        component={Link}
                                        to={to}
                                        variant="bodySmall"
                                        className={classes.links}
                                    >
                                        {label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Section>

            <Section size="medium" className={classes.footerContainer}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="bodySmall">
                            This site was created as part of a school project. / Ce site a été réalisé dans le cadre d'un projet scolaire.
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
        </footer>
    );
};

export default Footer;