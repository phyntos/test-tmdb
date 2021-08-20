import React from 'react';
import {Center, Grid} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import FavoriteButton from "./FavoriteButton";
import MoviesButton from "./MoviesButton";

const Header = () => {
    return (
        <Center>
            <Grid templateColumns="140px 400px 135px" gap={15} >
                <MoviesButton />
                <SearchInput />
                <FavoriteButton />
            </Grid>
        </Center>
    );
};

export default Header;