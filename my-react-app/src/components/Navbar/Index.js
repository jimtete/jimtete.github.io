import React from 'react';
import ProfilePicture from "../Pictures/ProfilePicture";
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
                        About
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                    <NavLink to='/annual' activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Index;
