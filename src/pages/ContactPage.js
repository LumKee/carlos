import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Grid,
} from '@material-ui/core';

import Layout from '../ui/src/layout/Layout';
import Typography from '../ui/src/typography/Typography';

const ContactPage = () => (
    <>
        <Layout>
            <Helmet>
                <title>Carlos : votre spécialiste du carrelage | Nous contacter</title>
                <meta
                    name="description"
                    content="Une suggestion ? Une question ? Prenez contact avec nous."
                />
                <meta
                    name="keywords"
                    content="carlos, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison, contact"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Carlos : contactez-nous" />
                <meta property="og:url" content="https://carlosmateriel.fr" />
                <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
            </Helmet>

            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5" components="h1">
                        Contact
                    </Typography>
                </Grid>
            </Grid>
        </Layout>
    </>
);

export default ContactPage;