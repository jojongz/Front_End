import React from "react";
import Comment from "./Comment";

const comments = [
{
    name : "김재우",
    comment : "안녕하세요",
},
{
    name : "말자",
    comment : "잘 지내고 있니?",
},
{
    name : "김재우",
    comment : "그냥 그래..",
},
];




function CommentList(props){
    return(
        <div>
            {Comment.map((comment) =>{
                return(
                    <Comment name = {comment.name} comment = {comment.comment} />

                    
                )
            })}
        </div>
    )
}
        
            

export default CommentList;

