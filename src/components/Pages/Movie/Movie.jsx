import React, {useEffect, useState} from 'react';
import {Box, Center, CircularProgress, Grid, Text} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import MovieAPI from "../../../API/MovieAPI";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieList from "../../MovieList/MovieList";

const Movie = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState(null)
    const [recommendations, setRecommendations] = useState(null)
    const [fetchMovie, isMovieLoading, movieError] = useFetching(async () => {
        const data = await MovieAPI.getMovie(id)
        await new Promise(resolve => setTimeout(resolve, 750))
        setMovie(data)
    }, [id])
    const [fetchRecommendations, isRecommendations, recommendationsError] = useFetching(async () => {
        const data = await MovieAPI.getRecommendations(id)
        const rec = [...data.results]
        if (rec.length === 21) {
            rec.pop()
        }
        await new Promise(resolve => setTimeout(resolve, 750))
        setRecommendations(rec)
    }, [id])
    useEffect(fetchRecommendations, [fetchRecommendations])
    useEffect(fetchMovie, [fetchMovie])
    return (
        <Box>
            {
                (movieError || recommendationsError)
                    ? <Center>{movieError || recommendationsError}</Center>
                    : (isMovieLoading || isRecommendations)
                        ? <Center mt={2}><CircularProgress isIndeterminate color="red.500"/></Center>
                        : <Grid gap={15}>
                            <MovieInfo movie={movie}/>
                            <Text textAlign='center' fontWeight='bold' fontSize='xl'>Рекомендации</Text>
                            {
                                recommendations.length !== 0
                                    ? <MovieList movies={recommendations}/>
                                    : <Text textAlign='center' fontSize='xl'>Рекомендации нет</Text>
                            }
                        </Grid>
            }
        </Box>
    );
};

export default Movie;