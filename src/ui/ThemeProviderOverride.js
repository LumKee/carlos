import React, { useEffect } from 'react';
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider as MUIThemeProvider
} from '@material-ui/core/styles';

// TODO: Figure out responsiveFontSizes
const theme = responsiveFontSizes(createMuiTheme({
    typography: {
        fontFamily: 'Work Sans, sans-serif',
        h1: {
            fontFamily: 'Garamond, serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '60px',
            letterSpacing: '1.5px'
        },
        h2: {
            fontFamily: 'Work Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '60px',
            letterSpacing: '0px'
        },
        h3: {
            fontFamily: 'Work Sans, serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '48px',
            letterSpacing: '0px'
        },
        h4: {
            fontFamily: 'Garamond, serif',
            fontStyle: 'normal',
            fontWeight: '800',
            fontSize: '34px',
            letterSpacing: '1.5px'
        },
        h5: {
            fontFamily: 'Work Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            letterSpacing: '0px'
        },
        h6: {
            fontFamily: 'Work Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            letterSpacing: '0px'
        },

        body1: {
            fontFamily: 'Work Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px'
        },
        body2: {
            fontFamily: 'Work Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px'
        },
        button: {
            textTransform: 'none'
        },

        // Adding customs variants
        custom: {
            subtitle1: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '0.15px'
            },
            subtitle2: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0px'
            },
            bodyItalic: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                fontWeight: 'normal',
                fontSize: '16px'
            },
            bodySmall: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px'
            },
            bodySmallItalic: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                fontWeight: 'normal',
                fontSize: '14px'
            },
            bodyBold: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px'
            },
            textButton: {
                fontFamily: 'Work Sans, sans-serif',
                position: 'relative',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '14px',
                letterSpacing: '0.15px',
                textTransform: 'initial',
                cursor: 'pointer',
                '&:after': {
                    content: '""',
                    width: '100%',
                    position: 'absolute',
                    left: 0,
                    bottom: -6,
                    borderWidth: '0 0 1px',
                    borderStyle: 'solid'
                }
            },
            caption: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '12px',
                letterSpacing: '0.5px'
            },
            overline: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
            },
            error: {
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                color: '#f44336'
            }
        }
    },

    palette: {
        background: {
            default: '#ffffff'
        },
        primary: {
            light: '#7D6A6A',
            main: '#271F20',
            dark: '#1C0F13',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#B5506E',
            main: '#753447',
            dark: '#692E40',
            contrastText: '#ffffff'
        },
        error: {
            light: '#F6AAA1',
            main: '#f44336',
            dark: '#A51831',
            contrastText: '#ffffff'
        },
        warning: {
            light: '#F3CF93',
            main: '#DCA45A',
            dark: '#BA7730',
            contrastText: '#ffffff'
        },
        info: {
            light: '#30A5C0',
            main: '#007096',
            dark: '#005781',
            contrastText: '#ffffff'
        },
        success: {
            light: '#70E172',
            main: '#49C456',
            dark: '#0D7134',
            contrastText: '#ffffff'
        },
        grey: {
            100: '#f9f9f9',
            200: '#eeecec',
            300: '#cfcfcf',
            800: '#625A5A'
        }
    },

    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },

    overrides: {
        MuiButton: {
            root: {
                padding: '8px 16px'
            },
            outlined: {
                padding: '7px 16px'
            },
            contained: {
                padding: '8px 16px'
            }
        }
    }
}));


export const SERVER_SIDE_JSS_ID = 'jss-ssr';

const ThemeProvider = ({ children, serverSide, onlyMatch }) => {
    useEffect(() => {
        if (!serverSide) {
            const jssStyles = document.querySelector(`#${SERVER_SIDE_JSS_ID}`);

            if (jssStyles) {
                jssStyles.parentElement.removeChild(jssStyles);
            }
        }
    }, [serverSide]);

    return (
        <MUIThemeProvider theme={theme}>
            {children}
        </MUIThemeProvider>
    );
};

export default ThemeProvider;