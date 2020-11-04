import React from 'react';

import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';

import Header from '../components/Header'
import MenuRow from '../components/MenuRow';

const PromotionPage = () => (
    <>
        <Helmet>
            <title>Carlos : votre spécialiste du carrelage | Promotions</title>
            <meta
                name="description"
                content="Découvrez nos carrelages haut de gamme pour votre intérieur et extérieur. Nous vous proponsons une large gamme de produits en promotions qui sauront vous satisfaire."
            />
            <meta
                name="keywords"
                content="carlos, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison, promotions, promotions carrelage"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Carlos : nos promotions" />
            <meta property="og:url" content="https://carlosmateriel.fr" />
            <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
        </Helmet>

        <Container>
            <Header />
            <MenuRow />
            Promotions
        </Container>
    </>
);

export default PromotionPage;