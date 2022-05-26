

type BodyType={
    titleForBody:string;
}

export const Body=(prop:BodyType)=> {
    return(
        <div>
            {prop.titleForBody}
        </div>
    )
}

