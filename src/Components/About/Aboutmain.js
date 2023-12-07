import React from "react";

class Aboutmain extends React.Component{
    constructor(){
super();
console.log("first child constructor");
    }
    componentDidMount(){
        console.log("first child did mount")
    }
    render(){
        console.log("first child render")
    return(
        <div>Aboutmain</div>
    )
    }
}
export default Aboutmain 