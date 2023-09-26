import React from 'react';
import Item from "./Item";
import ProfilePicture from "../Pictures/ProfilePicture";
import classes from "./NavbarElement.module.css";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


const Index = () => {
    const profilePicture = 'https://media.licdn.com/dms/image/C4E03AQGef2_HpR10tw/profile-displayphoto-shrink_800_800/0/1607333355180?e=1700697600&v=beta&t=rQpDkxDzd2ty96ifLs_oTnQ8B12_ipVsj7OBh0uarmA';

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <ProfilePicture imageUrl={profilePicture}/>
                    <NavLink to='/about' activeStyle>
                        <Item itemName={"About"}/>
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        <Item itemName={"Events"}/>
                    </NavLink>
                    <NavLink to='/annual' activeStyle>
                        <Item itemName={"Annual Report"}/>
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        <Item itemName={"Teams"}/>
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        <Item itemName={"Blogs"}/>
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        <Item itemName={"Sign up"}/>
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Index;
