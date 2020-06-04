import React from 'react';

function Book( props ){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <img src="{props.thumbnail}" alt="book thumbnail"></img>
            <p>{props.textSnippet}</p>
        </div>
    );
}

export default Book;