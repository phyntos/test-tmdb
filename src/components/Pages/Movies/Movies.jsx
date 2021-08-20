import React, {useEffect, useState} from "react";
import MovieAPI from "../../../API/MovieAPI";
import { Center, Grid} from "@chakra-ui/react";
import SelectFilter from "./SelectFilter";
import {useFetching} from "../../../hooks/useFetching";
import MovieListPaged from "../../MovieList/MovieListPaged";

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [filterPage, setFilterPage] = useState({
        filter: 'popular',
        page: 1
    })
    const [hasShowMore, setHasShowMore] = useState(true)

    const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
        setHasShowMore(true)
        const data = await MovieAPI.getMovies(filterPage.filter, filterPage.page)
        await new Promise(resolve => setTimeout(resolve, 750))
        if (filterPage.page !== 1) {
            if (data.results.length !== 0) {
                setMovies([...movies, ...data.results])
            } else setHasShowMore(false)
        } else {
            setMovies(data.results)
        }
    }, [filterPage])

    useEffect( fetchMovies, [fetchMovies])

    const onSelectChange = (value) => {
        setFilterPage({
            page: 1,
            filter: value
        })
    }
    const showMore = () => {
        setFilterPage({
            ...filterPage,
            page: filterPage.page + 1
        })
    }


    return (
        <Grid templateRows="40px 1fr" gap={15}>
            <SelectFilter value={filterPage.filter} onChange={onSelectChange}/>
            {
                moviesError
                    ? <Center>{moviesError}</Center>
                    :
                    <MovieListPaged
                        page={filterPage.page}
                        hasShowMore={hasShowMore}
                        showMore={showMore}
                        movies={movies}
                        noText="Фильмов нет"
                        isLoading={isMoviesLoading}
                        progressColor="blue.300"
                    />
            }
        </Grid>
    )

}

export default Movies;
