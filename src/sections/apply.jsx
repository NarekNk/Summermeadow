import React from "react";
import icon from "./../images/teleg.svg";
import email from "./../images/Email.svg";
import { ApplyBtn } from "../common/styled";
import { useForm } from "react-hook-form";

const Apply = () => {
    const telegramReg = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        console.log(errors)
    }


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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={errors.companyName?.type === 'required' && 'error'}
                    placeholder="Name / Company Name"  {...
                    register("companyName", { required: true, maxLength: 150 })} />

                <input type="email"
                    placeholder="Email"
                    className={errors.email?.type === 'required' && 'error'}
                    {...register("email", { required: true, maxLength: 150 })} />
                <input type="text"
                    placeholder="Telegram"
                    className={errors.telegram?.type === 'required' && 'error'}
                    {...register("telegram", { required: true, maxLength: 150, pattern: telegramReg })} />
                <input type="url"
                    placeholder="Project Link*"
                    className={errors.projectUrl?.type === 'required' && 'error'}
                    {...register("projectUrl", { required: true })} />
                <textarea rows="10" placeholder="Tell us about yourself" {...register("about", { required: true })}></textarea>

                <ApplyBtn to={"#apply"} className="applyBtn">Apply for partnership</ApplyBtn>
                <p className="policy">This site is protected by the <a href="#">Privacy Policy</a> and <a href="">Cookie Policy</a> apply</p>
            </form>
        </section>
    )
}


export default Apply;