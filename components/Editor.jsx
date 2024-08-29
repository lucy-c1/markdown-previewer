import React from "react"

/*
Props: 
- updateMarkdown: for every user key stroke, 
save the markdown input and parse it to be html
- defaultMarkdown: what the initial markdown inside the editor is
*/

export default function Editor(props) {
    return (
        <div className = "editor-container">
            <h1>Editor:</h1>
            <textarea id = "editor" onChange = {props.updateMarkdown} defaultValue={props.defaultMarkdown}></textarea>
        </div>
    )
}