import React from "react";
import classes from "./NavbarElement.module.css";

const Item = ({ itemName }) => {
    return (
        <div className={classes.element_bg}>
            {itemName}
        </div>
    )
}

export default Item;