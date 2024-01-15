import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick=()=>{
        // console.log("you have clicked on handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        // console.log("you have clicked on handleUpClick");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText]= useState("");

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#abb7e9':'white', color: props.mode === 'dark'?'white':'grey'}} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the TextArea to preview it here"}</p>
        </div>
        </>
    )
}
