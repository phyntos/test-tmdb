import React from 'react';
import {Grid} from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import Header from "./Header/Header";

const MovieApp = () => {
    return (
        <Grid templateRows="40px 1fr" marginY={15} gap={15}>
            <Header />
            <AppRouter />
        </Grid>
    );
};

export default MovieApp;