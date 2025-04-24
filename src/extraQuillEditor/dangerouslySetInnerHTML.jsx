import { useState } from "react";
import ReactQuill from "react-quill";

const DangerouslySetInnerHTMLFile = () => {
    const [content, setContent] = useState('');
    const [getValue , setGetValue] = useState([]);

    const handleGetValue = () => {
        setGetValue(content);
    }

    const handleReactQuill = (value) => {
        setContent(value);
    }

    return (
        <div>
            <ReactQuill value={content} onChange={handleReactQuill} />
            <button onClick={handleGetValue}>Click and get Value</button>

            {/* <p>{getValue}</p> */}
            <div dangerouslySetInnerHTML={{__html:getValue}}/>
        </div>
    )
}

export default DangerouslySetInnerHTMLFile;