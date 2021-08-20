import React from 'react';
import {Button, Center, CircularProgress, Text} from "@chakra-ui/react";

const ShowMore = ({isLoading, hasShowMore, showMore, page, movies, progressColor}) => {
    return (
        <Center minHeight="120px">
            {
                isLoading
                    ? page !== 1 && <CircularProgress isIndeterminate color={progressColor}/>
                    : hasShowMore
                        ? movies.length !== 0 && <Button onClick={showMore}>Показать еще</Button>
                        : <Text fontSize="2xl">Фильмы закончились</Text>
            }
        </Center>
    );
};

export default ShowMore;