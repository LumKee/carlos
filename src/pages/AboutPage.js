import React from 'react';

import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';

import Header from '../components/Header'
import MenuRow from '../components/MenuRow';

const ProductPage = () => (
    <>
        <Helmet>
            <title>Carlos : votre spécialiste du carrelage | A propos</title>
            <meta
                name="description"
                content="Carlos : votre spécialiste du carrelage vous propose une large gamme de carrelage haut de gamme. Parfait pour submlimer vos intérieurs et extérieurs."
            />
            <meta
                name="keywords"
                content="carlos, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Carlos : à propos" />
            <meta property="og:url" content="https://carlosmateriel.fr" />
            <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
        </Helmet>

        <Container>
            <Header />
            <MenuRow />
            A propos
        </Container>
    </>
);

export default ProductPage;