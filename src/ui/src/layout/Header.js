import React from 'react';

import { Grid } from '@material-ui/core';

import TopHeader from '../../../components/TopHeader'
import MenuRow from '../../../components/MenuRow';

const Header = () => (
    <header>
        <Grid container>
            <TopHeader />
            <MenuRow />
        </Grid>
    </header>
);

export default Header;