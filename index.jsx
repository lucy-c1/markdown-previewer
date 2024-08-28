import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function App() {
  /* what the user types into the editor */
  const [markdown, setMarkdown] = React.useState("");
  /* markdown parsed by marked library, displays in previewer */
  const [parsedMarkdown, setParsedMarkdown] = React.useState();

  function updateMarkdown(event) {
    setMarkdown(event.target.value);
  }

  React.useEffect(() => {
    parseMarkdown();
  }, [markdown]);

  function parseMarkdown() {
    const html = marked(markdown);
    // make sure the html is safe using dompurify
    const safeHtml = DOMPurify.sanitize(html);
    console.log(safeHtml);
    setParsedMarkdown(safeHtml);
  }
  return (
    <div>
      <Editor 
      updateMarkdown = {updateMarkdown}
      />
      <Previewer 
      parsedMarkdown = {parsedMarkdown}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 