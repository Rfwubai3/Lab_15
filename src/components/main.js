import React from "react";
import Section from "./section";
import Article from "./article";
import Aside from "./aside";
import "../styles.css";

export default function Main() {
    return(
    <div className="main">
    <Section/>
    <Article/>
    <Aside/>
    </div>
    );
}