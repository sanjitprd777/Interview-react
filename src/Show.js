import React from 'react';
import './App.css';
import { Link } from  'react-router-dom';


export default class Show extends React.Component{
  state = {
    loading: true,
    interviews: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const url = `http://localhost:3000/interviews/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    this.setState({ interviews: data, loading: false })    
  }
  
  render() {
    
    if(this.state.loading ) {
      return <div>Retrieving Interview data...</div>
    }

    if(!this.state.interviews ) {
      return <div>Retrieving Interview data...</div>
    }
    
    let interview = this.state.interviews

    return (
      <div>
          <div className="container">
          <div className="container-fluid">

            <div className="form-group">
              <label>Title:</label>
              <label>{interview.title}</label>
            </div>

            <div className="form-group">
              <label>Interviewer email:</label>
              <label>{interview.interviewer_email}</label>
            </div>

            <div className="form-group">
              <label>Interviewee email:</label>
              <label>{interview.interviewee_email}</label>
            </div>

            <div className="form-group">
              <label>Start time:</label>
              <label>{interview.start_time}</label>
            </div>
            
            <div className="form-group">
              <label>End time:</label>
              <label>{interview.end_time}</label>
            </div>
            <br></br>
            <div className="form-group text-center">
            <Link to={`/interviews/${interview.id}/Edit`}>
                Edit   &nbsp; &nbsp;
            </Link> |  &nbsp; &nbsp;
            <Link to={`/interviews/${interview.id}/delete`}>
                Delete &nbsp; &nbsp;
            </Link> |  &nbsp; &nbsp;
            <Link to="/interviews">
                Back
            </Link>
            </div>
            </div>
        </div>
      </div>
    );
  }
}


