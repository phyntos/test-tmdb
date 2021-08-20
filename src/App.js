import React, {useEffect, useState} from 'react';
import {MovieContext} from "./context";
import {useFetching} from "./hooks/useFetching";
import MovieAPI from "./API/MovieAPI";
import {Center, CircularProgress} from "@chakra-ui/react";
import {HashRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import MovieApp from "./components/MovieApp";


const App = () => {
    const [context, setContext] = useState({
        favorites: [],
        genres: []
    })

    const [fetchStart, isStarting, startError] = useFetching(async () => {
        const data = await MovieAPI.getGenres()
        await new Promise(resolve => setTimeout(resolve, 750))
        setContext({
            ...context,
            genres: data.genres
        })
        if (localStorage.getItem('favorites')) {
            setContext({
                favorites: JSON.parse(localStorage.getItem('favorites')),
                genres: data.genres
            })
        }
    }, [])



    useEffect(fetchStart, [fetchStart])

    return (
        <HashRouter>
            <ChakraProvider>
                <MovieContext.Provider value={{context, setContext}}>
                    {
                        startError
                            ? <Center>{startError}</Center>
                            : isStarting
                                ? <Center mt={2}><CircularProgress isIndeterminate color="green.300"/></Center>
                                : <MovieApp />
                    }
                </MovieContext.Provider>
            </ChakraProvider>
        </HashRouter>
    );
};

export default App;