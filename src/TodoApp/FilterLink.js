import React from "react";

const FilterLink = ({filter, children, onFilterClick, currentFilter}) =>{
    if(currentFilter===filter){
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
                onFilterClick(filter);
            }
            }>
            {children}
            </a>
        </div>
    );
}

export default FilterLink;