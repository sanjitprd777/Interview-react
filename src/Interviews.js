import React from 'react';
import './App.css';
import { Link } from  'react-router-dom';


export default class Interviews extends React.Component{
  state = {
    loading: true,
    interviews: [],
  };

  async componentDidMount() {
    const url = "http://localhost:3000/interviews";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ interviews: data, loading: false })    
  }
  
  render() {
    
    if(this.state.loading ) {
      return <div>Retrieving Interviews...</div>
    }

    if(!this.state.interviews.length ) {
      return <div>Retrieving Interviews...</div>
    }
    
    return (
      <div>
        <section className="section">
            <div className="contained">
            <div className="container-fluid">
            <p className="demo"></p>
            <h1>Listing Interviews Events</h1>
              <table>
                <tbody>
              <tr>
                <th>Subject</th>
                <th>Interviewer email</th>
                <th>Interviewee email</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Change</th>
              </tr>

              {this.state.interviews.map(interview => (
                      <tr key={interview.id}>
                      <td>{interview.title}</td>
                      <td>{interview.interviewer_email}</td>
                      <td>{interview.interviewee_email}</td>
                      <td>{interview.start_time}</td>
                      <td>{interview.end_time}</td>
                      <td><Link to={`/interviews/${interview.id}`}>Show</Link></td>
                    </tr> 
                  ))}
              </tbody>
            </table>
            </div>
            </div>
          </section>
      </div>
    );
  }
}


