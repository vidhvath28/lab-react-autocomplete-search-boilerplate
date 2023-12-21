import React,{useEffect, useState} from "react";
import data from "./resources/countryData";
function Search(){
    const [currData,changeData]=useState([]);
    const [inputValue,changeValue]=useState("")
    // useEffect((e)=>{
    //     console.log(e);
    // }
    // )
    

    console.log("dfdf",inputValue)

    useEffect(()=>{
        
        if(inputValue===""){
            return changeData([]) ;
        }
        function aa(data){
            return data.name.startsWith(inputValue);
         }
       
        let f=data.filter(aa)
        changeData(currData=>f) 
        
    },[inputValue])
    
    

    function change(e){
        console.log(currData)
        console.log(inputValue)
        // console.log("ewded",e.target.value)
        changeValue(e.target.value)
        // var f=data.filter(aa)
        // console.log(f)
        // let f=data.filter(elt=>elt.name.startsWith(e.target.value))
        // changeData(currData=>f) 
    }
    function returnIt(inputValue){
        return changeValue("")
    }

    return(
        <div>
            
            <input onChange={change} type="text" id="box" value={inputValue} name="fname"></input>
            <div>{currData.map((e)=><div>{e.name}</div>)}</div>
            <div><button onClick={returnIt}>clear</button></div>
        </div>
    )
}
export default Search;
