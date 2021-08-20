import React from 'react';
import {Box, Flex, Grid} from "@chakra-ui/react";

const MovieInfoBox = ({children, posterPath}) => {
    return (
        <Box
            backgroundImage={`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${posterPath})`}
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            minHeight="600px">
            <Flex
                alignItems='center'
                justifyContent='center'
                minHeight="600px"
                color='white'
                backgroundImage='linear-gradient(to right, rgba(6.27%, 4.31%, 10.98%, 1.00) 150px, rgba(6.27%, 4.31%, 10.98%, 0.84) 100%)'
            >
                <Grid templateColumns="360px 950px">
                    {children}
                </Grid>
            </Flex>
        </Box>
    );
};

export default MovieInfoBox;