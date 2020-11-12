import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Grid,
} from '@material-ui/core';

import BannerSection from '../components/BannerSection';
import CategoriesCards from '../components/CategoriesCards';
import DescriptionSection from '../components/DescriptionSection';
import Layout from '../ui/src/layout/Layout';
import PromotionsSection from '../components/PromotionsSections';
import ProductSection from '../components/ProductSection';

const HomePage = () => (
    <>
        <Layout>
            <Helmet>
                <title>Carlos : votre spécialiste du carrelage petite sirène</title>
                <meta
                    name="description"
                    content="Carlos : votre spécialiste du carrelage vous propose une large gamme de carrelage petite sirène haut de gamme. Parfait pour submlimer vos intérieurs et extérieurs."
                />
                <meta
                    name="keywords"
                    content="carlos, carreau de carrelage petite sirène, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Carlos : votre spécialiste carrelage" />
                <meta property="og:url" content="https://carlosmateriel.fr" />
                <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
            </Helmet>

            <Grid container direction="column">
                <BannerSection />
                <CategoriesCards />
                <DescriptionSection />
                <ProductSection />
                <PromotionsSection />
            </Grid>
        </Layout>
    </>
);

export default HomePage;