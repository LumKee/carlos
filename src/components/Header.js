import React from 'react';
import { Link } from 'react-router-dom';

import {
    Grid,
    makeStyles,
    InputBase,
    Icon
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography'

import Section from './Section'
const useStyles = makeStyles((theme) => ({
    container: {
        height: 'auto'
    },
    logo: {
        margin: '10px 0',
        width: 'auto',
        height: 34
    },
    inputRoot: {
        color: 'inherit',
        width: '80%'
    },
    inputInput: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: theme.spacing(2),
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        width: '100%',
        background: theme.palette.grey[100],
    },
    itemContainer: {
        '&:hover': {
            '& $links': {
                textDecoration: 'underline',
                cursor: 'pointer'
            }
        }
    },
    links: {
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Section>
            <Grid className={classes.container} container>
                <Grid
                    className={classes.square}
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="flex-start"
                >
                    <Link to="/accueil">
                        <img
                            className={classes.logo}
                            alt="logo"
                            src="/img/carlos.svg"
                        />
                    </Link>
                </Grid>

                <Grid
                    className={classes.square}
                    item
                    xs={8}
                    container
                >
                    <InputBase
                        placeholder="Recherche par type, mots-clés etc ..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Grid>

                <Grid
                    className={classes.square}
                    item
                    xs={2}
                    container
                    justify="flex-end"
                    alignItems="center"
                >
                    <Grid
                        className={classes.itemContainer}
                        item
                        xs
                        container
                        spacing={1}
                        justify="flex-end"
                        alignItems="center"
                        to="/home"
                    >
                        <Grid item>
                            <Icon>shopping_cart</Icon>
                        </Grid>

                        <Typography className={classes.links} variant="bodyBold" align="center">
                            Mon panier
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Section>
    );
};

export default Header;