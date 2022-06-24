import React,{useState} from 'react'



export default function Textform(props) {
    const[text,setText] = useState("enter the text")
    const convertupp = () => {
        //console.log("clicked" , " : "+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.MessShow(" Converted to uppercase" , "success")

    }
    
    const convertlow = () =>{
        //console.log("enterd" , " : " + text )
        let newsText = text.toLowerCase();
        setText(newsText)
        props.MessShow("Converted to Lowercase" , "success")
    }

    const handlecha = (event) => {
       //console.log("done")
        setText(event.target.value)
    }
    const listen = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const myStyle = {
        color:"#330000",
        padding:"3px",
        margin:"2px",
      }

    return (
        <>
        <div className='body' style={{color:"gray"}} >
            <div className="stat">
                <h1 className='mb-4'>{props.heading}</h1>
                <textarea className="form-control " onChange={handlecha} value={text} id="box" rows="5"></textarea>  
                
                <div style={myStyle}>
                <button disabled={text.length===0} className='btn mx-1 my-1'  onClick={convertupp}> upper</button>
                <button disabled={text.length===0} className='btn mx-1 my-1' onClick={convertlow}> lower</button>
                <button disabled={text.length===0} onClick={listen} className="btn mx-1 my-1">listen</button>
                </div>
            </div>
            <div>
                <h1>Count Word and Charecter </h1>
                <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Word and {text.length} charecter</p>
            </div>
            <div>
                <h1>priview</h1>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

//import UseState from './componentts/useState'; // write in app.js


/* const[text,setText] = useState("enter the text") --- text (we set  value like (enter the text)) 
    setText upercase must , and first name (text) , you can define secondname use [set+firstname like (setText)] */
// onChange is for enter the value in textarea
