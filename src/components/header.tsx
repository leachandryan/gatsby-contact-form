import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AppBar, Toolbar, Typography, Link, Button, Tooltip } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
    },
    title: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none'
    }
}));

export interface HeaderProps {
    switchTheme: () => void;
    siteTitle?: string;
}

const Header = (props) => {
    const styles = useStyles();

    return (
        <AppBar component="header" position="static" className={styles.root}>
            <Toolbar>
                <Typography variant="h6" className={styles.title}>
                    <Link to="/" component={GatsbyLink} color="inherit" className={styles.link}>
                        {props.siteTitle || ''}
                    </Link>
                </Typography>
                <Tooltip title="switch theme">
                    <Button onClick={props.switchTheme}>
                        <div>Toggle On/Off</div>
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;