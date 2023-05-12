import React from 'react';
import { Typography, Container } from '@material-ui/core';

const NotFoundPage = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: 64, marginBottom: 16 }}>
            <Typography variant="h2" gutterBottom component="h1">
                NOT FOUND
            </Typography>
            <Typography variant="body1">
                You just hit a route that doesn&#39;t exist... the sadness.
            </Typography>
        </Container>
    );
};

export default NotFoundPage;