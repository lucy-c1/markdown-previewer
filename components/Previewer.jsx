import React from "react"

export default function Previewer(props) {
    return (
        <div className = "previewer-container">
            <h1>Previewer:</h1>
            {/* this is where the parsed markdown will be inserted, turn String to HTML
            (which is already sanitized so it is safe to use dangerouslySetInnerHTML)
            */}
            <div id = "preview" dangerouslySetInnerHTML={{ __html: props.parsedMarkdown }}>
            </div>
        </div>
    )
}