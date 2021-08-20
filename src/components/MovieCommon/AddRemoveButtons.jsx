import React from 'react';
import MyIconButton from "./MyIconButton";

const AddRemoveButtons = ({hasInFavorites, remove, add, ...props}) => {
    return (
        <div>
            {
                hasInFavorites
                    ? <MyIconButton {...props} type='remove' onClick={remove}/>
                    : <MyIconButton {...props} type='add' onClick={add}/>
            }
        </div>
    );
};

export default AddRemoveButtons;