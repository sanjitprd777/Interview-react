import React from 'react';
import './App.css';
import {Link} from  'react-router-dom';

function EditInterview(event) {
  
  const pageUrl = window.location.href
  const id = pageUrl.substring(35,38);
  
  const perform_function = async(json_object) => {
    console.log(json_object);
    
    const options = 
      {
          method: 'PATCH',            
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(json_object),
      };
      const response = await fetch(`http://localhost:3000/interviews/` + id, options);
      console.log(response);
      window.location = "/";

  }


  console.log("I am in EditInterview ");  
  event.preventDefault();
  const data = new FormData(event.target);
  var json_object   = {}
  data.forEach((value, key) => {json_object[key] = value});

  perform_function(json_object);
  
  
}

export default class Edit extends React.Component{
  state = {
    loading: true,
    interviews: null,
  };

  async componentDidMount() {
    
    // fetching id from current page url
    const pageUrl = window.location.href
    const id = pageUrl.substring(35,38);
    
    const url = "http://localhost:3000/interviews/" + id;
    const response = await fetch(url);
    const data = await response.json();
    
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
              <form onSubmit = { EditInterview } className="section">
                <div className="container">
                  <div className="container-fluid">
                    <center><h1>Create an Interview Event </h1></center>
                      <div className="form-group" id="myForm">
                        <label>Title:</label>
                        <input type="text" name="title" id="tit" defaultValue={interview.title}></input>
                      </div>
                      <div className="form-group">
                        <label>Interviewer Email:</label>
                        <input type="email" name="interviewer_email" id="r-email" defaultValue={interview.interviewer_email}></input>
                      </div>
                      <div className="form-group">
                        <label>Interviewee Email:</label>
                        <input type="email" name="interviewee_email" id="e-email" defaultValue={interview.interviewee_email}></input>
                      </div>
                      <div className="form-group">
                        <label>Start Time:</label>
                        <input type="datetime-local" name="start_time" id="stime"></input>
                      </div>
                      <div className="form-group">
                        <label>End Time:</label>
                        <input type="datetime-local" name="end_time" id="etime"></input>
                      </div>
                      <br></br><br></br>
                      <div className="form-group text-center" >
                          <button type="submit" id="sub">
                            Edit Event
                          </button>
                      </div>
                      <br></br>
                      <Link to="/interviews">
                        <div className="form-group text-center">
                          Back
                        </div>
                      </Link>
                  </div>
                </div>
              </form>
            </div>
      );
  }
}
