import React from 'react';

type BodyType = {
    title: string
}

export const Body: React.FC<BodyType> = (props) => {
    return (
        <>
          <h1>{props.title}</h1>
        </>
    );
};
