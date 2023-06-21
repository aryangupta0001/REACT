import React, { useState } from 'react';


export default function TextForms(props) {
  const [text, setText] = useState("");

  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const downClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }


  const clearText = () => {
    let newText = "";
    setText(newText);
    props.alert("success", "Cleared", "Text Box has been cleared");
  }

  const OnChange = (event) =>{
    
    // Since we have set the "value" of the Textarea as "text", which is a State variable, and it is set with "setText" function in UpClick() function.
    // So wwhle typing in Textarea, there will be no change in text.
    // Now we have to use setText() function to change the text of the Textarea when we type.
    
    setText(event.target.value);        // event.target returns the element that triggered the event, and event.target.value returns that element's value.
  }

  // text = "Hello";               // Inccorect way to change state
  // setText("Hello");             // Correct way to change state

  return (
    <div> 
        <h1 style = {{color : props.mode === "light"?"black":"white"}}>{props.heading}</h1>
        <div className="mb-5">
            <textarea className={`form-control border border-${props.mode === "light"?"dark":"light"}`} id="myBox" rows="10" value={text} placeholder='Enter Text Here' onChange={OnChange} style={{color : props.mode === "light"?"black":"white", backgroundColor : props.mode === "light"?"white":"#212529"}}></textarea>
        </div>


        <button type="button" className={`btn ${props.mode === "light"?"btn-primary mx-2":"btn-outline-light"} mx-2`} onClick={upClick}>Convert To Upper Case</button>
        <button type="button" className={`btn ${props.mode === "light"?"btn-primary mx-2":"btn-outline-light"} mx-2`} onClick={downClick}>Convert To Lower Case</button>
        <button type="button" className={`btn ${props.mode === "light"?"btn-primary mx-2":"btn-outline-light"} mx-2`} onClick={clearText}>Clear</button>



        <div className='my-3'>  
          <h4 style = {{color : props.mode === "light"?"black":"white"}}>Text analysis :-</h4>
          <p style = {{color : props.mode === "light"?"black":"white"}}>
            Your text has {text.split(" ").length} words & {text.length} characters. <br />
            Average reading time is : {text.split(" ").length/125} minutes.
          </p>
          
          <div className="my-3"></div>
          
          <h4 style = {{color : props.mode === "light"?"black":"white"}}>Preview</h4>
          <p style = {{color : props.mode === "light"?"black":"white"}}>
          {text}
          </p>
        </div>
    </div>
  )
}