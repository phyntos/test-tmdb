import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {StarIcon} from "@chakra-ui/icons";

const FavoriteButton = () => {
    return (
        <Button
            _focus={{boxShadow: 'rgba(246, 224, 94, 0.6) 0px 0px 0px 3px'}}
            bgColor="#F6E05E"
            color='white'
            colorScheme="yellow"
            paddingX={2}
            as={Link}
            to="/favorites"
        >
            <Flex alignItems="center" justifyContent="space-between" >
                <StarIcon mr={2} w={6} h={6} color="white"/>
                <Text textAlign="center">Избранное</Text>
            </Flex>
        </Button>
    );
};

export default FavoriteButton;