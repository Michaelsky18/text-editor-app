import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import { useState } from "react";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ],
};


const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor-input"
            modules={modules}
          />
        </div>
        <div className="preview" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default App;
