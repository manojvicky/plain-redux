import React from "react";

const Link = ({filter, children, active, onClick}) =>{
    if(active){
        return(
            <div style={{"display": "inline", marginLeft:"5px"}}>
            <span>{children}</span>
            </div>
        );
    }
    return(
        <div style={{"display": "inline", marginLeft:"5px"}}>
            <a href="#" onClick={(e)=>{
                e.preventDefault();
                onClick();
            }
            }>
            {children}
            </a>
        </div>
    );
}

export default Link;