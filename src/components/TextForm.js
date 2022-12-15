
                  

import React , {useState} from 'react'



export default function TextForm(props) {
const handleUpClick= ()=>{


    let newText=text.toUpperCase()
    setText(newText)
  

}

const handleDownClick= ()=>{

  let newText=text.toLowerCase()
  setText(newText)

}

const handleOnChange=(event)=>{
setText(event.target.value);
}

    const [text ,setText]=useState("");
  return (
    <div className="container"style={{color:props.mode==="light"?"#042743":"white"}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"grey" , color:props.mode==="light"?"#042743":"white"}}id="My-box" rows="8"></textarea>
  </div>


<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary " onClick={handleDownClick}>Convert to lower case</button>

<div className="container my-3" style={{color:props.mode==="light"?"#042743":"white"}}>
  <h2>Your Text Summary</h2>
<p>  {text.length} charcter</p>
<p>{0.08*text.length} sec of read</p>

</div>
</div>

  )
}
