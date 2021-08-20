import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Favorites from "./Pages/Favorites/Favorites";
import Movie from "./Pages/Movie/Movie";
import Search from "./Pages/Search/Search";
import {Box} from "@chakra-ui/react";

const AppRouter = () => {
    return (
        <Box minHeight="100vh">
            <Switch>
                <Route exact path="/movies">
                    <Movies />
                </Route>
                <Route exact path="/movie/:id">
                    <Movie />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/search/:query">
                    <Search />
                </Route>
                <Redirect to="/movies" />
            </Switch>
        </Box>
    );
};

export default AppRouter;