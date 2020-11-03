import React from 'react';
import { Link } from 'react-router-dom';

import {
	Grid,
	makeStyles,
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography'

import Section from './Section'

const useStyles = makeStyles((theme) => ({
	container: {
		height: 'auto'
	},
	logo: {
		margin: '10px 0',
		width: 'auto',
		height: 34
	},
	links: {
		color: theme.palette.common.black,
		textDecoration: 'none'
	}
}));

const MenuRow = () => {
	const classes = useStyles();

	return (
		<Section>
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
							<Link to="/home">
								<Typography className={classes.links} variant="subtitle1">
									Carrelages
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography className={classes.links} variant="subtitle1">
									Prestations
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography className={classes.links} variant="subtitle1">
									Promotions
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography className={classes.links} variant="subtitle1">
									A propos
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography className={classes.links} variant="subtitle1">
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