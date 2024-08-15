import React from "react";
import "./index.css"
import { useState } from 'react'
import QuestionPost from "./QuestionPost";
import ArticlePost from "./ArticlePost";

function PostSelection(){
    const [selectedButton, setSelectedButton] = useState('Question');

    const handleChange = (event) => {
        setSelectedButton(event.target.value);
    };

    return(
        <div id="selectionPost">
            <h1>New Post</h1>
            <div id="postTypeSelection">
                <h3>Select Post Type:</h3>
                <div id="questionButton">
                    <input type="radio" id="question" name="postType" value="Question" checked={selectedButton === 'Question'} onChange={handleChange} />
                    <label htmlFor="question">Question</label>
                </div>
                <div id="articleButton">
                    <input type="radio" id="article" name="postType" value="Article" checked={selectedButton === 'Article'} onChange={handleChange} />
                    <label htmlFor="article">Article</label>
                </div>
            </div>
            <div>
                {selectedButton === 'Question' && <QuestionPost />}
                {selectedButton === 'Article' && <ArticlePost />}
            </div>
        </div>
    )
}
export default PostSelection