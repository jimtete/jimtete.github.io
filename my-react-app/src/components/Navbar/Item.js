import React from "react";
import classes from "./NavbarElement.module.css";
import '../../index.css';

const Item = ({ itemName }) => {
    return (
        <div class='text-xl' className={classes.element_bg}>
            {itemName}
        </div>
    )
}

export default Item;