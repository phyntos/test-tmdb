import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import MovieAPI from "../../../API/MovieAPI";
import {Box, Center} from "@chakra-ui/react";
import MovieListPaged from "../../MovieList/MovieListPaged";

const Search = () => {
    const {query} = useParams()
    const [search, setSearch] = useState(null)
    const [page, setPage] = useState(1)
    const [hasShowMore, setHasShowMore] = useState(true)

    const showMore = () => {
        setPage(page + 1)
    }

    const [fetchSearch, isSearch, searchError] = useFetching(async () => {
        setHasShowMore(true)
        const data = await MovieAPI.getSearch(query, page)
        await new Promise(resolve => setTimeout(resolve, 750))
        if (page !== 1) {
            if (data.results.length !== 0) {
                setSearch([...search, ...data.results])
            } else setHasShowMore(false)
        } else {
            setSearch(data.results)
        }
    }, [page, query])

    useEffect(fetchSearch, [fetchSearch])

    return (
        <Box>
            {
                searchError
                    ? <Center>{searchError}</Center>
                    :
                    <MovieListPaged
                        page={page}
                        hasShowMore={hasShowMore}
                        showMore={showMore}
                        movies={search}
                        isLoading={isSearch}
                        noText='Ничего не найдено'
                        progressColor="green.300"
                    />
            }
        </Box>
    );
};

export default Search;