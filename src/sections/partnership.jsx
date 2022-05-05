import React from "react";
import { Card } from "../common/styled";

const Partnership = () => {
    return (
        <section className="partnership">
        <h2>The partnership formula</h2>
        <div className="holder">
            <Card>
                <h4>Referral bonus</h4>
                <p>For our referral partners we have prepared a bonus reward. If you know someone who needs our services, let us know about it.</p>
            </Card>
            <Card>
                <h4>Discounts</h4>
                <p>For our partners we provide discounts on our services.</p>
            </Card>
            <Card>
                <h4>Brand avernes</h4>
                <p>We provide marketing support in our communities for our partners.</p>
            </Card>
        </div>
    </section>
    )
}


export default Partnership;