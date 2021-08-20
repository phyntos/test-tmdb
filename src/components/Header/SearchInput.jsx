import React, {useState} from 'react';
import {Center, Input} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";

const SearchInput = () => {
    const [query, setQuery] = useState('')
    let history = useHistory();
    const redirect = () => {
        history.push("/search/" + query)
    }
    return (
        <Center>
            <Input
                onChange={e => setQuery(e.target.value)}
                value={query}
                w={400}
                type='search'
                placeholder='Поиск...'
                borderColor="#38A169"
                border="3px solid"
                _focus={{boxShadow: `rgba(56, 161, 105, 0.6) 0px 0px 0px 3px`}}
                _hover={{
                    borderColor: "#38A169"
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        redirect()
                    }
                }}
            />
        </Center>
    );
};

export default SearchInput;