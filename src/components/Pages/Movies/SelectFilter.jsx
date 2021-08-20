import React from 'react';
import {Flex, Select} from "@chakra-ui/react";

const SelectFilter = ({value, onChange}) => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Select
                w={220}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option value='popular'>Популярные фильмы</option>
                <option value='now_playing'>Смотрят сейчас</option>
                <option value='upcoming'>Ожидаемые фильмы</option>
                <option value='top_rated'>Лучшие фильмы</option>
            </Select>
        </Flex>
    );
};

export default SelectFilter;