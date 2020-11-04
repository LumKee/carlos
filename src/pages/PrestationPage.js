import React from 'react';

import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';

import Header from '../components/Header'
import MenuRow from '../components/MenuRow';

const PrestationPage = () => (
    <>
        <Helmet>
            <title>Carlos : votre spécialiste du carrelage | Nos produits</title>
            <meta
                name="description"
                content="Découvrez l'ensemble de notre panel de prestation. Du conseil à la pose, nous vous accompagnons tout au long de votre projet."
            />
            <meta
                name="keywords"
                content="carlos, carrelage, carrelage petite sirène, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison, prestations"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Carlos : prestations" />
            <meta property="og:url" content="https://carlosmateriel.fr" />
            <meta property="og:image:url" content="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80" />
        </Helmet>

        <Container>
            <Header />
            <MenuRow />
            Prestations
        </Container>
    </>
);

export default PrestationPage;