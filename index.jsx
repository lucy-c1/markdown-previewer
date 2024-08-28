import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  /* what the user types into the editor */
  const [markdown, setMarkdown] = React.useState("");
  function updateMarkdown(event) {
    setMarkdown(event.target.value);
  }
  return (
    <div>
      <Editor 
      updateMarkdown = {updateMarkdown}
      />
      <Previewer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 