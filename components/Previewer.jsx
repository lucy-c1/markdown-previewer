import React from "react"

export default function Previewer() {
    return (
        <div className = "previewer-container">
            <h1>Previewer:</h1>
            {/* this is where the parsed markdown will be inserted */}
            <div id = "preview">
                
            </div>
        </div>
    )
}