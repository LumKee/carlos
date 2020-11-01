import React from 'react';
import { Link } from 'react-router-dom';

import {
	Grid,
	makeStyles
} from '@material-ui/core';

import Typography from './../ui/src/typography/Typography'

import Section from './Section'
const useStyles = makeStyles(() => ({
	container: {
		height: 110
	},
	logo: {
		margin: '10px 0',
		width: 'auto',
		height: 34
	}
}));

const MenuRow = () => {
	const classes = useStyles();

	return (
		<Section disablePadding size="large">
			<Grid className={classes.container} container>
				<Grid
					className={classes.square}
					item
					xs={2}
					container
					alignItems="center"
					justify="flex-start"
				>
					<Link to="/home">
						<img
							className={classes.logo}
							alt="logo"
							src="/img/carlos.svg"
						/>
					</Link>
				</Grid>

				<Grid
					className={classes.square}
					item
					xs={8}
					container
				>
					<Grid
						item
						xs
						container
						spacing={2}
						justify="center"
						alignItems="center"
					>
						<Grid item>
							<Link to="/home">
								<Typography variant="bodyBold">
									Carrelages
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography variant="bodyBold">
									Prestations
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography variant="bodyBold">
									Promotions
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography variant="bodyBold">
									A propos
                            	</Typography>
							</Link>
						</Grid>

						<Grid item>
							<Link to="/home">
								<Typography variant="bodyBold">
									Contact
                            	</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					className={classes.square}
					item
					xs={2}
					container
					justify="flex-end"
					alignItems="center"
				>
					<Grid item>
						<Link to="/home">
							<Typography variant="bodyBold">
								Icon
                            </Typography>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Section>
	);
};

export default MenuRow;