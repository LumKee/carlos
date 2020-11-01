import React from 'react';

import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';

import MenuRow from '../components/MenuRow';

const HomePage = () => (
    <>
        <Helmet>
            <title>Carlos : votre spécialiste du carrelage</title>
            <meta
                name="description"
                content="Carlos : votre spécialiste du carrelage vous propose une large gamme de carrelage haut de gamme. Parfait pour submliemer vos intérieurs."
            />
            <meta
                name="keywords"
                content="carlos, carrelage, vente, carrelage, carrelage haut de gamme, bricolage, maison carrelage, carrelage maison"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Carlos : votre spécialiste carrelage" />
            <meta property="og:url" content="" />
            <meta property="og:image:url" content="https://images.unsplash.com/photo-1588581282844-4c6eea7bd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        </Helmet>

        <Container>
            <MenuRow />
        </Container>
    </>
);

export default HomePage;