import React from 'react';
import './App.css'

export default class DeleteEvent extends React.Component {
    async componentDidMount(){
        const id = this.props.match.params.id;
        const options = 
        {
            method: 'DELETE',            
        };
        const response = fetch(`http://localhost:3000/interviews/${id}`, options);
        console.log(response);
        window.location = "/";
    } 

    render() {
        return (
            <div>
                <p>Deleting event...</p>
            </div>
        )
    }
}