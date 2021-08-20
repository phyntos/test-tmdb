import React from 'react';
import {Grid} from "@chakra-ui/react";

const MovieItemBox = ({children}) => {
    return (
        <Grid
            templateColumns="180px 180px"
            borderRadius={10}
            boxShadow="xl"
            _hover={{boxShadow: "dark-lg"}}
            transition="box-shadow 0.3s ease-in-out"
        >
            {children}
        </Grid>
    );
};

export default MovieItemBox;