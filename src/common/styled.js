import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ApplyBtn = styled.button`
    border: none;
    text-align: center;
    text-decoration: none;
    color: var(--black);
    padding: 15px 30px;
    background: linear-gradient(91.83deg, #7AF051 16.38%, rgba(194, 240, 81, 0.8) 116.75%);
    border-radius: 30px;

    font-size: 16px;
    &:hover {
        box-shadow: 0 0 5px green; 
}
`


export const Link = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: #F1F1F1;
    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;


    text-align: center;

    margin-left: -10px;
    padding: 10px 20px;
`


export const Card = styled.div`
    border: 1px solid #C2F051;
    border-radius: 20px;
    
    padding: 35px;

    h4 {
        margin-bottom: 20px;
    }
`