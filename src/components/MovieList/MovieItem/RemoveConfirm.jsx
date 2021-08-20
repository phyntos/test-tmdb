import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import MyIconButton from "../../MovieCommon/MyIconButton";

const RemoveConfirm = ({remove, cancel}) => {
    return (
        <Flex direction="column" justifyContent="space-between" >
            <Text textAlign="center" fontSize="md" mb={3}>Точно удалить?</Text>
            <Flex justifyContent="center">
                <MyIconButton type='remove' mr={3} size='md' onClick={remove}/>
                <MyIconButton type='cancel' size='md' onClick={() => cancel(false)}/>
            </Flex>
        </Flex>
    );
};

export default RemoveConfirm;