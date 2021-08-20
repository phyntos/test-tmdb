import React from 'react';
import {Text} from "@chakra-ui/react";

const GenresText = ({genres, size}) => {
    return (
        <Text fontSize={size}>
            {
                genres.map((genre, index) =>
                    <span key={genre.id}>{genre.name}{index !== genres.length - 1 && ', '}</span>
                )
            }
        </Text>
    );
};

export default GenresText;