import React from "react";
import classes from "./ProfilePicture.module.css"

const ProfilePicture = ({ imageUrl }) => {
    return (
        <div>
            <img className={classes.pfp} src={imageUrl} alt="Profile pic"/>
        </div>
    )
}

export default ProfilePicture;