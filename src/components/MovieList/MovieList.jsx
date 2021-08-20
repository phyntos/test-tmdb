import React from 'react';
import {Center, CircularProgress, Flex, Grid, Text} from "@chakra-ui/react";
import MovieItem from "./MovieItem/MovieItem";

const MovieList = ({page = 1, isLoading, progressColor, noText, movies}) => {
    return (

        <Flex direction="column" alignItems="center">
            {
                (page === 1 && isLoading)
                    ? <Center mt={2}><CircularProgress isIndeterminate color={progressColor}/></Center>
                    : movies.length === 0
                        ? <Text textAlign='center' fontSize='2xl'>{noText}</Text>
                        : <Grid transition="2s" templateColumns="repeat(4, 360px)" autoRows="270px" gap={15}>
                            {movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
                        </Grid>
            }
        </Flex>
    );
};

export default MovieList;