import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Grid,
    GridList
} from '@material-ui/core';

import Layout from '../ui/src/layout/Layout';
import Typography from '../ui/src/typography/Typography';
import ProductCard from '../components/ProductCard';

const ProductPage = () => (
    <>
        <Layout>
            <Helmet>
                <title>Carlos : votre spécialiste du carrelage | Nos carrelages</title>
                <meta
                    name="description"
                    content="Découvrez nos carrelages haut de gamme pour votre intérieur et extérieur. Nous vous proponsons une large gamme de produits qui sauront vous satisfaire."
                />
                <meta
                    name="keywords"
                    content="carlos, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Carlos : découvrez nos produits" />
                <meta property="og:url" content="https://carlosmateriel.fr" />
                <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
            </Helmet>

            <Grid
                container
                direction="column"
                spacing={6}
            >
                <Grid item>
                    <Typography variant="h5" components="h1">
                        Nos carrelages
                    </Typography>
                </Grid>

                <Grid container item spacing={3}>
                    <Grid item xs={12}>
                        <GridList cellHeight="auto" cols={1} spacing={24}>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </GridList>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    </>
);

export default ProductPage;