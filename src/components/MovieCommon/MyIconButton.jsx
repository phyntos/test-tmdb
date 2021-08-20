import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {DeleteIcon, NotAllowedIcon, StarIcon} from "@chakra-ui/icons";

const iconTypes = {
    add: {
        Icon: {
            lg: <StarIcon w={7} h={7} color="yellow.300"/>,
            md: <StarIcon w={6} h={6} color="yellow.300"/>
        },
        rgb: '246, 224, 94',
        hex: '#F6E05E',
        color: 'yellow',
        title: 'Добавить в избранное'
    },
    remove: {
        Icon: {
            lg: <DeleteIcon w={7} h={7} color="red.500"/>,
            md: <DeleteIcon w={6} h={6} color="red.500"/>
        },
        rgb: '229, 62, 62',
        hex: '#E53E3E',
        color: 'red',
        title: 'Удалить из избранных'
    },
    cancel: {
        Icon: {
            lg: <NotAllowedIcon w={7} h={7} color="green.500"/>,
            md: <NotAllowedIcon w={6} h={6} color="green.500"/>
        },
        rgb: '56, 161, 105',
        hex: '#38A169',
        color: 'green',
        title: 'Отмена'
    }
}

const MyIconButton = ({size, type, ...props}) => {
    let newProps = props
    if (size === 'lg') {
        newProps = {
            ...newProps,
            _hover: { background: 'transparent' },
            _active: { background: 'transparent' },
        }
    }
    return (
        <IconButton
            {...newProps}
            title={iconTypes[type].title}
            key={type+size}
            _focus={{boxShadow: `rgba(${iconTypes[type].rgb}, 0.6) 0px 0px 0px 3px`}}
            borderColor={iconTypes[type].hex}
            border='3px solid'
            borderRadius="50%"
            variant="outline"
            colorScheme={iconTypes[type].color}
            size={size}
            icon={iconTypes[type].Icon[size]}
        />
    );
};

export default MyIconButton;