import React from 'react';
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import GenresText from "../../MovieCommon/GenresText";
import RemoveConfirm from "./RemoveConfirm";
import AddRemoveButtons from "../../MovieCommon/AddRemoveButtons";

const MovieItemInfo = ({title, genres, hasConfirm, remove, add, date, vote, setHasConfirm, hasInFavorites}) => {
    return (
        <Grid templateRows="1fr auto" p={2}>
            <Box>
                <Text fontWeight="bold">{title}</Text>
                <GenresText size='sm' genres={genres} />
            </Box>
            {
                hasConfirm
                    ?
                    <RemoveConfirm remove={remove} cancel={setHasConfirm} />
                    :
                    <Flex alignItems="flex-end" justifyContent="space-between">
                        <Box>
                            <Text color="gray.500">{date}</Text>
                            <Text fontWeight="bold">{vote || "Без рейтинга"}</Text>
                        </Box>
                        <AddRemoveButtons
                            hasInFavorites={hasInFavorites}
                            add={add} remove={remove} size="md"
                        />
                    </Flex>
            }
        </Grid>
    );
};

export default MovieItemInfo;