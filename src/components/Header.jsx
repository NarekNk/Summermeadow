import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import icon from "./../images/telegram.svg";
import Logo from "./../images/HashEx.png";
import hashLogo from "./../images/hashlogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

    const Burger = styled(GiHamburgerMenu)`
    display: none;
    width: 40px;
    height: 40px;
    
    @media (max-width: 900px) {
        display: block
    }
    `
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <div className="header">
                <Link to={"/"}>
                    <div className="logo">
                        <img src={hashLogo} className="logo-hash" alt="logo-hash"/>
                        <div>
                            <img src={Logo} alt="HashEx" />
                            <p className="logo-p">blockchain security</p>
                        </div>
                    </div>
                </Link>
                <Nav className={"navbar"}/>
                <Burger onClick={() => setShowNav(!showNav)} />
            </div>
            {showNav && <Nav className={"navbarShown"}/>}
        </>
    )
}

const Nav = ({className}) => {
    return (
        <nav className={className}>
            <Link to={"/audits"}>Audits</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/company"}>Company</Link>
            <Link to={"/contacts"} className={"talk"}><img src={icon} alt="telegram icon"/> Let's Talk</Link>
        </nav>
    )
}



const Link = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: #F1F1F1;
    width: 125px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;


    text-align: center;


    padding: 10px 20px;
    &:hover {
        color: var(--gray)
        
    }

`

export default Header;