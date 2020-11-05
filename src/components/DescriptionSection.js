import React from 'react';

import {
    Grid,
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography';
import Section from '../ui/src/layout/Section';

const DescriptionSection = () => {

    return (
        <Section>
            <Grid
                container
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="body1">
                        Poussez la porte de votre magasin de carrelage en ligne Carlos. Saison après saison, découvrez un large choix de références clés pour réaliser tous vos projets, à l’intérieur comme à l’extérieur. De la salle de bains à la cuisine, ainsi que le jardin, nous disposons d’une gamme de produits aussi riche que variée. Ensemble, on peut tout faire ! Un magasin de carrelage à portée de clic ou au pied de chez vous, il n’y a pas mieux pour donner vie à tous vos projets. Nos nouveaux modèles de carreaux de carrelages petite sirène sauront vous convaincre !
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    );
};

export default DescriptionSection;