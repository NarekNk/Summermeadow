import React from "react";
import ape from "./../images/apeswap 2.png";
import forta from "./../images/forta_white 1.png";
import liquid from "./../images/logo-Liquid Collectibles 2.png";
import gnosis from "./../images/Gnosis Chain.png";
import analyt from "./../images/Logo Analytex.png";
import crypto from "./../images/Logo CryptEx.png";
import polygon from "./../images/polygon 1.png";

import { ApplyBtn } from "../common/styled";

const TopSection = () => {


    return (
        <section className="topSection">
            <h1>HashEx affiliate program</h1>
            <h3>Support the HashEx mission of making the DeFi market a safe space while taking advantage of HashEx offers.</h3>
            <ApplyBtn to={"#apply"}>Apply for partnership</ApplyBtn>
            <div className="partners">
                <img src={ape} alt="" />
                <img src={forta} alt="" />
                <img src={liquid} alt="" />
                <img src={gnosis} alt="" />
                <img src={analyt} alt="" />
                <img src={crypto} alt="" />
                <img src={polygon} alt="" />
            </div>
        </section>
    )
}



export default TopSection;