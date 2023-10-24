import React from "react";
import '../../index.css';

const Item = ({ itemName }) => {
    return (
        <div class='text-lg hover:bg-cyan-400 pt-0 pb-0 ps-1 pe-1 rounded-md'>
            {itemName}
        </div>
    )
}

export default Item;