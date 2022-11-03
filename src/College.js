import React, { Component } from "react";

class College extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.city)
        return <h6>George Brown College - {this.props.city}</h6>
    }
}

export default College