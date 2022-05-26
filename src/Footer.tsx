

type FooterType={
    titleForBody: string;
}

export const Footer=(prop:FooterType)=> {
    return(
        <div>
            {prop.titleForBody}
        </div>
    );
}