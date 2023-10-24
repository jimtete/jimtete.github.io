import React from "react";
import "../../index.css"
import classes from "./ProfilePicture.module.css"

const ProfilePicture = ({ imageUrl }) => {
    return (
        <div>
            <img class="transition ease-in-out w-24 h-24 rounded-full hover:shadow-xl hover:shadow-cyan-100 hover:scale-110 duration-300" src={imageUrl} alt="Profile pic"/>
        </div>
    )
}

export default ProfilePicture;