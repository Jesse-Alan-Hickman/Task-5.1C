import React from "react";
import "./index.css"

function ArticlePost(){
    return(
        <div id="articlePost">
            <h2>What do you want to share?</h2>
            <div id="articleTitle">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Enter a descriptive title..."/>
            </div>
            <div>
            <label htmlFor="abstract">Abstract</label><br></br>
            <textarea id="abstract" rows={5} placeholder="Enter a 1-paragraph abstract"/>
            </div>
            <div>
            <label id="articleText" htmlFor="articleText">Article Text</label><br></br>
            <textarea id="articleText" rows={14} placeholder="Enter a 1-paragraph abstract"/>
            </div>
            <div id="articleTags">
                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"/>
            </div>
            <div id="articleButtonContainer">
                <button>Post</button>
            </div>
        </div>
    )
}
export default ArticlePost