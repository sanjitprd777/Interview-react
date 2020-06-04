import React from 'react';
import './App.css';
import {Link} from  'react-router-dom';

function CreateInterview(event) {

  
  const perform_function = async(json_object) => {
    console.log(json_object);
    const options = 
      {
          method: 'POST',            
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(json_object),
      };
      const response = await fetch(`http://localhost:3000/interviews`, options);
      console.log(response);
      window.location = "/";

  }


  console.log("I am in CreateInterview ");  
  event.preventDefault();
  const data = new FormData(event.target);
  var json_object   = {}
  data.forEach((value, key) => {json_object[key] = value});

  perform_function(json_object);
  
  
}


function New() {
  
  return (
        <div>
          <form onSubmit = { CreateInterview } className="section">
            <div className="container">
              <div className="container-fluid">
                <center><h1>Create an Interview Event </h1></center>
                  <div className="form-group" id="myForm">
                    <label>Title:</label>
                    <input type="text" name="title" id="tit"></input>
                  </div>
                  <div className="form-group">
                    <label>Interviewer Email:</label>
                    <input type="email" name="interviewer_email" id="r-email"></input>
                  </div>
                  <div className="form-group">
                    <label>Interviewee Email:</label>
                    <input type="email" name="interviewee_email" id="e-email"></input>
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
                        Create Event
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

export default New;