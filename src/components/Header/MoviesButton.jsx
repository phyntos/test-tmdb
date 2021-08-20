import React from 'react';
import {Link} from "react-router-dom";
import {Button, Flex, Text} from "@chakra-ui/react";
import {CalendarIcon} from "@chakra-ui/icons";

const MoviesButton = () => {
    return (
        <Button colorScheme="blue" as={Link} to="/movies">
            <Flex alignItems="center" justifyContent="space-between" >
                <CalendarIcon mr={2} w={6} h={6} color="white"/>
                <Text textAlign="center">
                    Все фильмы
                </Text>
            </Flex>
        </Button>
    );
};

export default MoviesButton;