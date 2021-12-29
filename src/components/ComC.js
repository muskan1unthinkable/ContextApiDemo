import React from "react";
import {name} from "../App";

const ComC = ()=>
{  return(
    <name.Consumer>
        {
            (name)=>
            {
               return  <h1>Hello {name}</h1>
            }
        }
    </name.Consumer>
)
    
}

export default ComC;
