import React from 'react';

function BookForm( props ){
    return(
        <div>
            <label for="bookname">
                write a book title
            </label>
            <input type="text" id="bookname"></input>
            <button onClick = {() => 
                props.requestVolume(bookname.value)
            }></button>
        </div>
    );
}

export default BookForm;