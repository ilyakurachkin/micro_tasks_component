import React from "react";

type FooterType = {
    title: string
}

export const Footer: React.FC<FooterType> =(props)=> {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}