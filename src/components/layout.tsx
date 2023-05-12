import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import { FCR, themes, getCookie, setCookie, themeCookie } from '../util';

const Layout: FCR = (props) => {
  
    return (
        <ThemeProvider>
            <CssBaseline />
            <div>
                {props.children}
            </div>
        </ThemeProvider>
    );
};

export default Layout;