import React from 'react';
import { Typography as MUITypography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ...theme.typography.custom || {}
}));

const Typography = ({
    children,
    variant,
    className,
    ...other
}) => {
    const classes = useStyles();

    if (classes[variant]) {
        return (
            <MUITypography className={`${classes[variant]} ${className || ''}`} {...other}>
                {children}
            </MUITypography>
        );
    }

    return (
        <MUITypography variant={variant} className={className} {...other}>
            {children}
        </MUITypography>
    );
};

export default Typography;