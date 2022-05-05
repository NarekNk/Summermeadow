import React from "react";
import icon from "./../images/teleg.svg";
import email from "./../images/Email.svg";
import { ApplyBtn } from "../common/styled";

const Apply = () => {
    return (
        <section className="apply" id="apply">
            <div className="formInfo">
                <h2>Become part of the DeFi intelligence alliance</h2>
                <p>Fill out this form and we will choose the best partnership offer for you</p>
                <div>
                    <a href="#"><img src={icon} alt="" /> telegram</a>
                </div>
                <div>
                    <a href="#"><img src={email} alt="" />  contact@hashex.org</a>
                </div>
            </div>
            <form>
                <input type="text" placeholder="Name / Company Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Telegram" />
                <input type="url" placeholder="Project Link*" />
                <textarea name="" rows="10" placeholder="Tell us about yourself"></textarea>
                <ApplyBtn to={"#apply"} className="applyBtn">Apply for partnership</ApplyBtn>
                <p className="policy">This site is protected by the <a href="#">Privacy Policy</a> and <a href="">Cookie Policy</a> apply</p>
            </form>
        </section>
    )
}


export default Apply;