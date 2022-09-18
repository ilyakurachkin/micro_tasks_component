import React from 'react';

type HeaderType = {
    title: string
}

export const Header: React.FC<HeaderType> = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
};

