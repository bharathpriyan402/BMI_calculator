import React,{useState} from "react";
import { useCallback } from "react";

const BMI = () =>{

    const [age,setAge]=useState()
    const [weight, setWeight] = useState()
    const [height,setHeight] = useState()
    const [bmi,setBmi] = useState()
    const [msg, setMsg] = useCallback('');


    const reload = ()=>{
         window.location.reload()
    }
    const handleCalculations = (e)=>{
        e.preventDefault()
        if(weight===0||height ===0){
            alert('Hello please enter a valid number')
        }
        else{
            let bmiFomular = (weight/ (height*height)*703);
            setBmi(bmiFomular.toFixed(2))
        }

        if(bmi <25){
            setMsg("You are Underweight")
        }
        else if(bmi>=25 || bmi <= 30){
            setMsg("You are Healthy")
        }
        else{
            setMsg("You are unhealthy, please consult doctor or medication")
        }
    }
    return(
        <div className="app">
            <div className="Container">

            <h1>BMI Calculator</h1>

            <form onSubmit={handleCalculations}>
                <div>
                    <label className="labels">Age</label><br/>
                    <input className="bmi-input" type="number" placeholder="Age......" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <div>
                    <label className="labels">Weight:</label><br/>
                    <input className="bmi-input" type="number" placeholder="Weight...." value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                </div>

                <div>
                    <label className="labels">Height:</label><br/>
                    <input className="bmi-input" type="number" placeholder="Height...." value={height} onChange={(e)=>setHeight(e.target.value)}/>
                </div>


                <div>
                    <button className="btn" type="submit">Calculate</button>
                    <button className="btn btn-reload" type="submit" onClick={reload}>Reload</button>
                </div>

                <div className="result">
                    <h3>Age: {age}</h3>
                    <h3>Your BMI is: {bmi}</h3>
                    <p className="p-msg">{msg}</p>
                </div>
            </form>
            </div>

           
        </div>
    )
}

export default BMI;