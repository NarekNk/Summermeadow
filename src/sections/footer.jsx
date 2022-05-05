import React from "react";
import Logo from "./../images/HashEx.png";
import hashLogo from "./../images/hashlogo.svg";


import github from "./../images/github.svg";
import emailIcon from "./../images/emailicon.svg";
import frame from "./../images/Frame.svg";
import teleg from "./../images/telegram.svg";
import linkedin from "./../images/linkedin.svg";
import { Link } from "../common/styled";


const Footer = () => {
    const footerData = {
        chunks: [
            {
                heading: "AUDITS",
                links: [{ name: "Smart Contracts Audit", url: "#" },
                { name: "Conducted audits", url: "#" }]
            },
            {
                heading: "CHAINS",
                links: [{ name: "BSC", url: "#" },
                { name: "Fantom", url: "#" },
                { name: "Solana", url: "#" },
                { name: "Avelanche", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                ]
            },
            {
                heading: "TYPES OF AUDIT",
                links: [{ name: "BSC", url: "#" },
                { name: "Fantom", url: "#" },
                { name: "Solana", url: "#" },
                { name: "Avelanche", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                ]
            },
            {
                heading: "SERVICES",
                links: [{ name: "BSC", url: "#" },
                { name: "Fantom", url: "#" },
                { name: "Solana", url: "#" },
                { name: "Avelanche", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                ]
            },
            {
                heading: "PRODUCTS",
                links: [{ name: "BSC", url: "#" },
                { name: "Fantom", url: "#" },
                { name: "Solana", url: "#" },
                { name: "Avelanche", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                ]
            },
            {
                heading: "COMPANY",
                links: [{ name: "BSC", url: "#" },
                { name: "Fantom", url: "#" },
                { name: "Solana", url: "#" },
                { name: "Avelanche", url: "#" },
                { name: "Avrora", url: "#" },
                { name: "Polygon", url: "#" },
                { name: "Ginosis Chain", url: "#" },
                ]
            }
        ]
    }

    const socialMedia = [github, emailIcon, frame, teleg, linkedin];


    return (
        <footer>
            <div>
                <Link to={"/"}>
                    <div className="logo">
                        <img src={hashLogo} className="logo-hash" />
                        <div>
                            <img src={Logo} alt="HashEx" />
                        </div>
                    </div>
                </Link>
                <div className="socialMedia">
                    {socialMedia.map((icon, i) => {
                        return <div key={i}>
                            <a href="#" target={"_blank"}>
                                <img src={icon} />
                            </a>
                        </div>
                    })}
                </div>
                <p>© All rights reserved</p>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
            </div>
            <div className="links">
                {footerData.chunks.map((chunk, i) => {
                    return <div className="footerChunk" key={i}>
                        <h4>{chunk.heading}</h4>
                        {chunk.links.map((link, j) => {
                            return <a key={j} href={link.url}>{link.name}</a>
                        })}
                    </div>
                })}
            </div>
        </footer>
    )
}



export default Footer;