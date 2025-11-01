import {useEffect, useState} from 'react';
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import axios from 'axios';

function App() {

  const [code, setCode] = useState(`write your code here`);
  const [review,setReview] = useState(``);

  useEffect(()=>{
    prism.highlightAll();
  })

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });

    setReview(response.data);
    console.log(response.data);
  }


  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily:'"Fira Code", "Fira Mono", monospace',
              fontSize:12,
              border:'1px solid #621fffff',
              borderRadius:"0.7rem",
              height:"100%",
              width:"100%"
            }}>

            </Editor>
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown>
            {review}
          </Markdown> 
        </div>
      </main>
    </>
  )
}



export default App
