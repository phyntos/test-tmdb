import React, {useContext, useEffect, useState} from 'react';
import {MovieContext} from "../../../context";
import MovieList from "../../MovieList/MovieList";

const Favorites = () => {
    const {context} = useContext(MovieContext)
    const [isFavoriteLoading, setIsFavoriteLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsFavoriteLoading(false)
        }, 750)
    }, [])
    return (
        <MovieList
            movies={context.favorites}
            isLoading={isFavoriteLoading}
            progressColor="yellow.300"
            noText="Избранных нет"
        />
    );
};

export default Favorites;