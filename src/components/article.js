import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../pages/news";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import Er404 from "../pages/er404";
import "../styles.css";

export default function Article(){
    return(
<div className="article">
    <Routes>
    <Route path="/news" element={<News/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="*" element={<Er404/>}/>

    </Routes>
</div>
    );
}