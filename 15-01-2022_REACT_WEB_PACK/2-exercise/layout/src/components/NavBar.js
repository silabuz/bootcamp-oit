import react, { Component } from "react";

export default class NavBar extends Component{
    render(){
        return(
            <nav class="navbar navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light">Silabuz</a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
        )
    }
}