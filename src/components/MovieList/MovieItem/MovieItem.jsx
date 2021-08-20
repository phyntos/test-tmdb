import React, {useContext, useEffect, useState} from 'react';
import MoviePoster from "../../MovieCommon/MoviePoster";
import {MovieContext} from "../../../context";
import {Link, useLocation} from "react-router-dom";
import MovieItemBox from "./MovieItemBox";
import MovieItemInfo from "./MovieItemInfo";

const MovieItem = ({movie}) => {
    const {context, setContext} = useContext(MovieContext)
    const [_favorites, _genres] = [context.favorites, context.genres]
    const [hasRemoveConfirm, setHasRemoveConfirm] = useState(false)
    const location = useLocation()
    const [genres, setGenres] = useState(movie.genres || [])

    useEffect(() => {
        if (movie.genre_ids) {
            setGenres(movie.genre_ids.map(genre_id => ({
                id: genre_id,
                name: _genres.find(genre => genre.id === genre_id).name
            })))
        }
    }, [movie, _genres])

    const addFavorite = () => {
        let localMovie = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            genres: genres,
            release_date: movie.release_date,
            vote_average: movie.vote_average
        }
        if (!_favorites.find(f => f.id === localMovie.id)) {
            setContext({
                ...context,
                favorites: [..._favorites, localMovie]
            })
        }
    }
    const removeFavorite = () => {
        if (location.pathname === '/favorites' && hasRemoveConfirm !== true) {
            setHasRemoveConfirm(true)
        } else {
            let newFavorites = _favorites.filter(f => f.id !== movie.id)
            setContext({
                ...context,
                favorites: newFavorites
            })
        }
    }

    useEffect(() => {
        if (_favorites.length !== 0) {
            localStorage.setItem('favorites', JSON.stringify(_favorites))
        }
    }, [_favorites])

    return (
        <MovieItemBox>
            <Link to={"/movie/" + movie.id}>
                <MoviePoster borderLeftRadius={10} size="md" src={movie.poster_path} alt={movie.title}/>
            </Link>
            <MovieItemInfo
                title={movie.title}
                genres={genres}
                date={movie.release_date}
                vote={movie.vote_average}
                hasConfirm={hasRemoveConfirm}
                add={addFavorite} remove={removeFavorite}
                setHasConfirm={setHasRemoveConfirm}
                hasInFavorites={_favorites.find(f => f.id === movie.id)}
            />
        </MovieItemBox>
    );
}


export default MovieItem;