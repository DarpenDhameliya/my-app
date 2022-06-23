import React,{useState} from 'react'

export default function DarkMod() {

   const[Style,setStyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })


    const[btnMode,setbtnMode] = useState("Enable Dark Mod")

    const[btngMode,setbtngMode] = useState("Enable Gray Mod")

    const darkMod = () =>{
        if(Style.color === 'black' && Style.backgroundColor === 'white') {
            setStyle({
                color: 'white',
                backgroundColor:'black' // black
            })
        
        setbtnMode("Enable light Mod")            
        }
        else if (Style.color === 'white' && Style.backgroundColor === 'Gray')  {
            setStyle({
                color: "white",
                backgroundColor: "black"   // black
            })
            setbtnMode("Enable dark mod")
        }
        else{
            setStyle({
                color:"black",
                backgroundColor : "white"
            })
        }
    }

   const grayMod = () => {
            if (Style.color === 'black' && Style.backgroundColor === 'white') {
                setStyle({
                    color: "white",
                    backgroundColor: "Gray"
                })
                setbtngMode("Enable White mod")
            }
            else if (Style.color === 'white' && Style.backgroundColor === 'black') {
                setStyle({
                    color: "white",
                    backgroundColor: "Gray"
                })
                setbtngMode("Enable gray mod")
            }
            
            else{
                setStyle({
                    color: "black",
                    backgroundColor: "white"
                })
                setbtngMode("Enable Gray mod")
            }
        }

        
  return (
    <div className='container my-3' >
    <h1 style={Style}>Details</h1>
        <div className="accordion"  id="accordionExample">
            <div className="accordion-item"  >
                <h2 className="accordion-header"   id="headingOne">
                    <button className="accordion-button" style={Style} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        home
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={Style}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    details
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={Style} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={Style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    our polices
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={Style} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-2'></div>
        <button type="button" onClick={darkMod} className="btnd" id="dark">{btnMode}</button>
        <button type="button" onClick={grayMod} className="btng" id="light">{btngMode}</button> 
    </div>    
  )
}
