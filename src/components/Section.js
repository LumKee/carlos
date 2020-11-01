import React from 'react';

import { Grid, useTheme, makeStyles } from '@material-ui/core';

const SMALL_MAX_WIDTH = 960;
const MEDIUM_MAX_WIDTH = 1280;
const LARGE_MAX_WIDTH = 1600;

const INNER_CONTAINER_PADDING = 24;
const INNER_CONTAINER_PADDING_SMALL = 16;

const SECTION_WIDTH_CONFIG = {
    medium: {
        xs: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING_SMALL
        },
        sm: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        md: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        lg: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        xl: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        }
    },
    regular: {
        xs: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING_SMALL
        },
        sm: {
            maxWidth: SMALL_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        md: {
            maxWidth: MEDIUM_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        lg: {
            maxWidth: MEDIUM_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        xl: {
            maxWidth: MEDIUM_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        }
    },
    large: {
        xs: {
            maxWidth: MEDIUM_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING_SMALL
        },
        sm: {
            maxWidth: MEDIUM_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        md: {
            maxWidth: LARGE_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        lg: {
            maxWidth: LARGE_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        },
        xl: {
            maxWidth: LARGE_MAX_WIDTH,
            padding: INNER_CONTAINER_PADDING
        }
    }
};

export const useSectionImgSizesAttr = (sectionSize = 'regular', percentConfig = {}) => {
    const theme = useTheme();
    const config = SECTION_WIDTH_CONFIG[sectionSize];

    const sizesArray = theme.breakpoints.keys.reduce((acc, breakpoint, index) => {
        if (index === theme.breakpoints.keys.length - 1) {
            const sectionMaxWidth = config[breakpoint].maxWidth - (2 * config[breakpoint].padding);
            const imgMaxWidth = percentConfig[breakpoint] ? Math.ceil((sectionMaxWidth * percentConfig[breakpoint]) / 100) : sectionMaxWidth;

            acc.push(`${imgMaxWidth}px`);
        } else {
            const sectionMaxWidth = Math.min(
                // max width for the current breakpoint, the width can't be more than that, no matter the max-width
                theme.breakpoints.values[theme.breakpoints.keys[index + 1]],
                config[breakpoint].maxWidth
            ) - (2 * config[breakpoint].padding);
            const imgMaxWidth = percentConfig[breakpoint] ? Math.ceil((sectionMaxWidth * percentConfig[breakpoint]) / 100) : sectionMaxWidth;

            acc.push(`(max-width:${theme.breakpoints.values[theme.breakpoints.keys[index + 1]]}px) ${imgMaxWidth}px`);
        }

        return acc;
    }, []);

    return sizesArray.join(', ');
};

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        width: '100%'
    },
    padding: {
        padding: `${theme.spacing(4)}px 0`,
        [theme.breakpoints.down('xs')]: {
            padding: `${theme.spacing(2)}px 0`
        }
    },
    innerContainer: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: `0 ${theme.spacing(3)}px`,
        [theme.breakpoints.down('xs')]: {
            padding: `0 ${theme.spacing(2)}px`
        }
    },

    // Sizes:
    medium: {
        maxWidth: SMALL_MAX_WIDTH
    },
    regular: {
        maxWidth: MEDIUM_MAX_WIDTH,
        [theme.breakpoints.down('md')]: {
            maxWidth: SMALL_MAX_WIDTH
        }
    },
    large: {
        maxWidth: LARGE_MAX_WIDTH,
        [theme.breakpoints.down('md')]: {
            maxWidth: MEDIUM_MAX_WIDTH
        }
    },

    // Variants:
    transparent: {
        background: 'transparent'
    },
    white: {
        background: theme.palette.common.white
    },
    grey: {
        background: theme.palette.grey[100]
    },
    black: {
        background: theme.palette.common.black
    }
}));

const Section = ({
    children,
    variant = 'transparent',
    size = 'regular',
    disablePadding = false,
    className,
    containerClassName,
    ...other
}) => {
    const classes = useStyles();

    return (
        <Grid
            item
            className={`${classes.container} ${disablePadding ? '' : classes.padding} ${classes[variant]} ${className || ''}`}
            {...other}
        >
            <div className={`${classes.innerContainer} ${classes[size]} ${containerClassName || ''}`}>
                {children}
            </div>
        </Grid>
    );
};

export default Section;