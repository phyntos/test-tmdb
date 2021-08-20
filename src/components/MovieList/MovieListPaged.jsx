import React from 'react';
import {Box} from "@chakra-ui/react";
import MovieList from "./MovieList";
import ShowMore from "./ShowMore";

const MovieListPaged = ({hasShowMore, noText, showMore, ...props}) => {
    return (
        <Box>
            <MovieList {...props} noText={noText}/>
            <ShowMore {...props} hasShowMore={hasShowMore} showMore={showMore} />
        </Box>
    );
};

export default MovieListPaged;