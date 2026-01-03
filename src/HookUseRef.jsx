import {useRef} from "react";

function HookUseRef() {
    const inputRef = useRef();
    const inputRef1 = useRef();
    const isFirst = useRef(true);

    const Toggle = () => {
        if(!isFirst.current){
        inputRef.current.focus();
        }
        else {
        inputRef1.current.focus();
    }
    isFirst.current = !isFirst.current;
    }


    return <>
    
    <input ref = {inputRef}></input>
     <input ref = {inputRef1}></input><br/>
    <button onClick = {Toggle}>Display</button>
   
    {/* <button onClick = {Handle1}>Display</button> */}
    
    
    </>
}


export default HookUseRef;