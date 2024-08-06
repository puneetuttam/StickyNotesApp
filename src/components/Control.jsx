import React from "react";
import AddBtn from "./AddBtn";
import colors from '../assets/colors.json'
import Color from "./Color";

const Control = () => {
    return (
        <div id='controls'>
            <AddBtn />
            {colors.map((color)=>(
                <Color key={color.id} color={color}/>
            ))}
        </div>
    );
};

export default Control;
