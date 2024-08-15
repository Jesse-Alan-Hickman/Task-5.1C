import React from "react";
import "./index.css"

function QuestionPost(){
    return(
        <div id="questionPost">
            <h2>What do you want to ask?</h2>
            <div id="questionTitle">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Start your question with how, what, why, etc..."/>
            </div>
            <div>
            <label htmlFor="description">Describe your problem</label><br></br>
            <textarea id="description" rows={22}/>
            </div>
            <div id="questionTags">
                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"/>
            </div>
            <div id="questionButtonContainer">
                <button>Post</button>
            </div>
        </div>
    )
}
export default QuestionPost