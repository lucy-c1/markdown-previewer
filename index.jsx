import React from 'react';
import ReactDOM from "react-dom/client";
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { marked } from 'marked';
import { defaultMarkdown } from './defaultMarkdown';
import DOMPurify from 'dompurify';

function App() {
  /* what the user types into the editor */
  const [markdown, setMarkdown] = React.useState(defaultMarkdown);

  function updateMarkdown(event) {
    setMarkdown(event.target.value);
  }

  return (
    <div>
      <Editor 
      updateMarkdown = {updateMarkdown}
      defaultMarkdown = {defaultMarkdown}
      />
      <Previewer 
      parsedMarkdown = {DOMPurify.sanitize(marked(markdown, {breaks: true, gfm: true, }))}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 