import react, { Component } from "react";

export default class ListDisplayer extends Component{
    render(){
        return(
            <ul class="list-group">
                {this.props.list.map(element => {
                    return(
                        <li class="list-group-item">{element}</li>
                    )
                })}
            </ul>
        )
    }
}