import React, { useState } from 'react';


export default function NASA(props){
    const {nasaPic} = props;
    const {date, explanation, title, url} = nasaPic;


    return(
        <div>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <div className = "image-container">
                <img src = {url} alt = "This is NASA's POD" height = {500} ></img>
            </div>
            <p>{explanation}</p>
        </div>
    )
}