import React, {useContext} from 'react';
import MoviePoster from "../../../MovieCommon/MoviePoster";
import {Flex, Grid, Text} from "@chakra-ui/react";
import {MovieContext} from "../../../../context";
import AddRemoveButtons from "../../../MovieCommon/AddRemoveButtons";
import MovieInfoBox from "./MovieInfoBox";
import GenresText from "../../../MovieCommon/GenresText";

const MovieInfo = ({movie}) => {

    const {context, setContext} = useContext(MovieContext)

    const addFavorite = () => {
        let localMovie = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            genres: movie.genres,
            release_date: movie.release_date,
            vote_average: movie.vote_average

        }
        if (!context.favorites.find(f => f.id === localMovie.id)) {
            setContext({
                ...context,
                favorites: [...context.favorites, localMovie]
            })
        }
    }
    const removeFavorite = () => {
        let newFavorites = context.favorites.filter(f => f.id !== movie.id)
        setContext({
            ...context,
            favorites: newFavorites
        })
    }

    return (
        <MovieInfoBox posterPath={movie.poster_path}>
            <MoviePoster borderRadius='20px' size="lg" src={movie.poster_path} alt={movie.title}/>
            <Flex alignItems='center' p={15}>
                <Grid gap="15px">
                    <Text fontWeight="bold" fontSize="4xl">{movie.title}</Text>
                    <GenresText size='lg' genres={movie.genres} />
                    <Grid alignItems='center' templateColumns='48px 30px 110px' gap={15}>
                        <AddRemoveButtons
                            hasInFavorites={context.favorites.find(f => f.id === movie.id)}
                            add={addFavorite}
                            remove={removeFavorite}
                            size="lg"
                        />
                        <Text fontSize='xl' fontWeight="bold">{movie.vote_average || "NR"}</Text>
                        <Text fontSize='xl' color="gray.500">{movie.release_date}</Text>
                    </Grid>
                    <Text fontWeight='bold' fontSize='lg'>Обзор</Text>
                    <Text>{movie.overview}</Text>
                </Grid>
            </Flex>
        </MovieInfoBox>
    );
};

export default MovieInfo;