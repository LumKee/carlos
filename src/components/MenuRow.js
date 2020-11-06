import React from 'react';
import { Link } from 'react-router-dom';

import {
	Grid,
	makeStyles,
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography';

import Section from '../ui/src/layout/Section';

const useStyles = makeStyles((theme) => ({
	container: {
		height: 'auto',
	},
	logo: {
		margin: '10px 0',
		width: 'auto',
		height: 34
	},
	linksComponent: {
		color: theme.palette.common.black,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			cursor: 'pointer',
		}
	}
}));

const MenuRow = () => {
	const classes = useStyles();

	return (
		<Section style={{ paddingBottom: '32px' }}>
			<Grid className={classes.container} container>
				<Grid
					className={classes.square}
					item
					xs={12}
					container
				>
					<Grid
						item
						xs
						container
						spacing={2}
						justify="flex-start"
						alignItems="center"
					>
						<Grid item>
							<Link className={classes.linksComponent} to="/produits">
								<Typography variant="subtitle1">
									Produits
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/prestations" className={classes.linksComponent}>
								<Typography variant="subtitle1">
									Prestations
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/promotions" className={classes.linksComponent}>
								<Typography variant="subtitle1">
									Promotions
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/à-propos" className={classes.linksComponent}>
								<Typography variant="subtitle1">
									A propos
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/contact" className={classes.linksComponent}>
								<Typography variant="subtitle1">
									Contact
                            	</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Section>
	);
};

export default MenuRow;