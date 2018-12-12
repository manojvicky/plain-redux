import React from "react";
import PropTypes from 'prop-types';
import Link from "./Link";
class FilterLink extends React.Component{
    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(()=>{
            this.forceUpdate();
        })
    }

    componentWillUnmount(){
this.unsubscribe();
    }
  render(){
      let {store} = this.context;
      let state = store.getState();
    return(
        <Link active={this.props.filter===state.visibilityFilter} onClick={()=>{store.dispatch({type:"VISIBILITY_FILTER", filter: this.props.filter})}}>
        {this.props.children}
        </Link>
    );
  }
}
FilterLink.contextTypes = {
    store: PropTypes.object
}
export default FilterLink;