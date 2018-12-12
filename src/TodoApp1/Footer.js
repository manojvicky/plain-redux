import React from "react";
import FilterLink from "./FilterLink";

const Footer =({currentFilter, FilterClick})=> {
    return(
    <div>
        <FilterLink filter="SHOW_ALL" currentFilter={currentFilter} onFilterClick={(filter)=>{FilterClick(filter)}}>
            All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE" currentFilter={currentFilter} onFilterClick={(filter)=>{FilterClick(filter)}}>
            Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED" currentFilter={currentFilter} onFilterClick={(filter)=>{FilterClick(filter)}}>
            Completed
        </FilterLink>
    </div>
    );
};

export default Footer;