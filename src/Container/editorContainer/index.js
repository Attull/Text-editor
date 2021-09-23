  import React, {useState} from "react";
  import ReactQuill from "react-quill";
  import EditorToolbar, { modules, formats } from "./editorToolbar";
  import "../../../node_modules/quill/dist/quill.snow.css";

  
  function EditContainer({Tlength, setTlength}) {
      const [body, setBody] = useState("");
      const [len, setLength] = useState(0);
      
      const handleBody = (e) =>{  
          const len=e.split(" ").toString().replace( /(<([^>]+)>)/ig, '')
   
         const totalLen=len.split(',')
          setBody(e);
          setLength(totalLen)  
          setTlength(totalLen) 
        };
     
     

      return (
          <div className="editContainer">
              <EditorToolbar />
              <ReactQuill 
                placeholder="write something.."
                modules={modules}
                formats={formats}
                onChange={handleBody}
                value={body}
              />
            
          </div>
      );
  }
  
   
  export default EditContainer