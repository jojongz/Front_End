import React from "react";
import Book from './Book';

function Library(pros){
    return(
        <div>
            <Book name = "처음 만난 Java" numOfPage = {300} />
            <Book name = "처음 만난 AWS" numOfPage = {400} />
            <Book name = "처음 만난 React" numOfPage = {500} />
        </div>

    );
}

export default Library;